using System;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Place;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Professional;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.Reserve
{
    public class ReserveViewModel : BaseViewModel
    {
        public PlaceViewModel Place { get; private set; }
        public Guid PlaceId { get; private set; }
        public ProfessionalViewModel Professional { get; private set; }
        public Guid ProfessionalId { get; private set; }
        public DateTime Date { get; private set; }
        public TimeSpan StartTime { get; private set; }
        public TimeSpan EndTime { get; private set; }
        public Decimal Cost { get; private set; }
        public bool Flag { get; private set; }
    }
}
