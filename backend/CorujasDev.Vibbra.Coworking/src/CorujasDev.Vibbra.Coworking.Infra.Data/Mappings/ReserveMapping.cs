using CorujasDev.Vibbra.Coworking.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Mappings
{
    public class ReserveMapping : IEntityTypeConfiguration<Reserve>
    {
        public void Configure(EntityTypeBuilder<Reserve> builder)
        {
            //Demos o nome da tabela
            builder.ToTable("Reserves");
            builder.HasKey(c => c.Id);

            builder.Property(x => x.PlaceId)
                .HasColumnName("PlaceId")
                .IsRequired();

            builder.HasOne<Place>(s => s.Place)
                .WithMany(g => g.Reserves)
                .HasForeignKey(s => s.PlaceId);

            builder.HasOne<Professional>(s => s.Professional)
                .WithMany(g => g.Reserves)
                .HasForeignKey(s => s.ProfessionalId);

            builder.Property(c => c.Date)
                .HasColumnName("Date")
                .HasColumnType("DateTime2")
                .IsRequired();

            builder.Property(c => c.StartTime)
                .HasColumnName("StartTime")
                .HasColumnType("BIGINT ")
                .IsRequired();

            builder.Property(c => c.EndTime)
                .HasColumnName("StartTime")
                .HasColumnType("BIGINT ")
                .IsRequired();

            builder.Property(c => c.Cost)
                .HasColumnName("Cost")
                .HasColumnType("Decimal(17,2) ")
                .IsRequired();

            builder.Property(c => c.Flag)
                .HasColumnName("Flag")
                .HasColumnType("Bit");

            builder.Property(c => c.DateCreated).IsRequired().HasColumnName("DateCreated");
            builder.Property(c => c.DateUpdate).IsRequired().HasColumnName("DateUpdate");
        }
    }
}
