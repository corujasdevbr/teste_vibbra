using CorujasDev.Vibbra.Coworking.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Mappings
{
    public class PlaceMapping : IEntityTypeConfiguration<Place>
    {
        public void Configure(EntityTypeBuilder<Place> builder)
        {
            //Demos o nome da tabela
            builder.ToTable("Locations");
            builder.HasKey(c => c.Id);

            builder.Property(x => x.Name)
                .HasColumnName("Name")
                .HasColumnType("VARCHAR(150)")
                .IsRequired();

            builder.Property(x => x.Cep)
                .HasColumnName("Cep")
                .HasColumnType("CHAR(9)")
                .IsRequired();

            builder.Property(x => x.Address)
                .HasColumnName("Address")
                .HasColumnType("VARCHAR(100)")
                .IsRequired();

            builder.Property(x => x.District)
                .HasColumnName("District")
                .HasColumnType("VARCHAR(100)")
                .IsRequired();

            builder.Property(x => x.City)
                .HasColumnName("City")
                .HasColumnType("VARCHAR(100)")
                .IsRequired();

            builder.Property(x => x.Image)
                .HasColumnName("Image")
                .HasColumnType("VARCHAR(350)")
                .IsRequired();

            builder.Property(x => x.State)
                .HasColumnName("State")
                .HasColumnType("CHAR(2)")
                .IsRequired();

            builder.Property(x => x.NumberTables)
                .HasColumnName("NumberTables")
                .HasColumnType("INT")
                .IsRequired();

            builder.Property(x => x.NumberChairs)
                .HasColumnName("NumberChairs")
                .HasColumnType("INT")
                .IsRequired();

            builder.Property(x => x.HourlyCost)
                .HasColumnName("HourlyCost")
                .HasColumnType("DECIMAL(17,2)")
                .IsRequired();

            builder.Property(c => c.DateCreated).IsRequired().HasColumnName("DateCreated");
            builder.Property(c => c.DateUpdate).IsRequired().HasColumnName("DateUpdate");
        }
    }
}
