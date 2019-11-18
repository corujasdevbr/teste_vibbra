using System;
using System.Linq;
using CorujasDev.Vibbra.Coworking.Core.Data;
using CorujasDev.Vibbra.Coworking.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Context
{
    public class CoworkingContext : DbContext, IUnitOfWork
    {
        public IConfiguration Configuration { get; }

        public CoworkingContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public CoworkingContext(DbContextOptions<CoworkingContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<Place> Locations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Professional> Professionals { get; set; }
        public DbSet<Reserve> Reserves { get; set; }

        public bool Commit()
        {
            try
            {
                foreach (var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("DateCreated") != null))
                {
                    if (entry.State == EntityState.Added)
                    {
                        entry.Property("DateCreated").CurrentValue = DateTime.Now;
                        entry.Property("DateUpdate").CurrentValue = DateTime.Now;
                    }

                    if (entry.State == EntityState.Modified)
                    {
                        entry.Property("DateCreated").IsModified = false;
                        entry.Property("DateUpdate").CurrentValue = DateTime.Now;
                    }
                }

                var save = base.SaveChanges() > 0;
                return save;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CoworkingContext).Assembly);

            modelBuilder.Entity<User>()
                .HasIndex(p => new { p.UserName })
                .IsUnique(true);

            modelBuilder.Entity<User>()
                .HasIndex(p => new { p.Email })
                .IsUnique(true);

            modelBuilder.Entity<User>()
                .HasOne<Professional>(s => s.Professional)
                .WithOne(ad => ad.User)
                .HasForeignKey<Professional>(ad => ad.UserId);
        }
    }
}
