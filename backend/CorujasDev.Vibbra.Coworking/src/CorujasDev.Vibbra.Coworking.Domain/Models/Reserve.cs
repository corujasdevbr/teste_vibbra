using System;
using CorujasDev.Vibbra.Coworking.Core.DomainObjects;

namespace CorujasDev.Vibbra.Coworking.Domain.Models
{
    public class Reserve : Entity
    {
        public Place Place { get; private set; }
        public Guid PlaceId { get; private set; }
        public Professional Professional { get; private set; }
        public Guid ProfessionalId { get; private set; }
        public DateTime Date { get; private set; }
        public TimeSpan StartTime { get; private set; }
        public TimeSpan EndTime { get; private set; }
        public Decimal Cost { get; private set; }
        public bool Flag { get; private set; }

        public Reserve()
        {
            
        }

        public Reserve(Guid placeId, Guid professionalId, DateTime date, TimeSpan startTime, TimeSpan endTime, Decimal cost, bool flag)
        {
            PlaceId = placeId;
            ProfessionalId = professionalId;
            Date = date;
            StartTime = startTime;
            EndTime = endTime;
            Cost = cost;
            Flag = flag;
        }
    }
}
