using CorujasDev.Vibbra.Coworking.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Mappings
{
    public class ProfessionalMapping : IEntityTypeConfiguration<Professional>
    {
        public void Configure(EntityTypeBuilder<Professional> builder)
        {
            //Demos o nome da tabela
            builder.ToTable("Professionals");
            builder.HasKey(c => c.Id);

            builder.Property(x => x.Name)
                .HasColumnName("Name")
                .HasColumnType("VARCHAR(100)")
                .IsRequired();

            builder.Property(x => x.RG)
                .HasColumnName("RG")
                .HasColumnType("VARCHAR(15)")
                .IsRequired();

            builder.Property(x => x.CPF)
                .HasColumnName("CPF")
                .HasColumnType("VARCHAR(14)")
                .IsRequired();

            builder.Property(x => x.Profession)
                .HasColumnName("Profession")
                .HasColumnType("VARCHAR(100)");

            builder.Property(x => x.Linkedin)
                .HasColumnName("Linkedin")
                .HasColumnType("VARCHAR(100)");

            builder.Property(x => x.Facebook)
                .HasColumnName("Facebook")
                .HasColumnType("VARCHAR(100)");

            builder.Property(x => x.Twitter)
                .HasColumnName("Twitter")
                .HasColumnType("VARCHAR(100)");

            builder.Property(x => x.CelPhone)
                .HasColumnName("CelPhone")
                .HasColumnType("VARCHAR(18)");

            builder.Property(x => x.Telephone)
                .HasColumnName("Telephone")
                .HasColumnType("VARCHAR(18)");

            builder.Property(x => x.City)
                .HasColumnName("City")
                .HasColumnType("VARCHAR(100)");

            builder.Property(x => x.State)
                .HasColumnName("State")
                .HasColumnType("CHAR(2)");

            builder.Property(x => x.City)
                .HasColumnName("City")
                .HasColumnType("VARCHAR(100)");

            builder.Property(c => c.DateCreated).IsRequired().HasColumnName("DateCreated");
            builder.Property(c => c.DateUpdate).IsRequired().HasColumnName("DateUpdate");
        }
    }
}
