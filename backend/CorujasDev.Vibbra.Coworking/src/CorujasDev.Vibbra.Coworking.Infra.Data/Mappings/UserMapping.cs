using CorujasDev.Vibbra.Coworking.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Mappings
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //Demos o nome da tabela
            builder.ToTable("Users");
            builder.HasKey(c => c.Id);

            builder.Property(c => c.UserName)
                .HasColumnName("UserName")
                .HasColumnType("VARCHAR(100)")
                .IsRequired();

            builder.Property(c => c.CompanyName)
                .HasColumnName("CompanyName")
                .HasColumnType("VARCHAR(100)");

            builder.Property(c => c.CNPJ)
                .HasColumnName("CNPJ")
                .HasColumnType("VARCHAR(18)");

            builder.Property(c => c.Email)
                .HasColumnName("Email")
                .HasColumnType("VARCHAR(100)")
                .IsRequired();


            builder.Property(c => c.Password)
                .HasColumnName("Password")
                .HasColumnType("VARCHAR(20)")
                .IsRequired();

            builder.Property(c => c.TypeUser)
                .HasColumnName("TypeUser")
                .HasColumnType("INT")
                .IsRequired();


            builder.Property(c => c.DateCreated).IsRequired().HasColumnName("DateCreated");
            builder.Property(c => c.DateUpdate).IsRequired().HasColumnName("DateUpdate");
        }
    }
}
