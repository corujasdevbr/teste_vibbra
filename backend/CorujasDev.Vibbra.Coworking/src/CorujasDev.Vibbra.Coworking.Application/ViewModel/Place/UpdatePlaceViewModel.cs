using System;
using CorujasDev.Vibbra.Coworking.Core.Enum;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.Place
{
    public class UpdatePlaceViewModel
    {
        public Guid Id { get; set; }
        public EnTypePlace TypePlace { get; set; }
        public string Name { get; set; }
        public string Cep { get; set; }
        public string Address { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int NumberTables { get; set; }
        public int NumberChairs { get; set; }
        public string Image { get; set; }
        public decimal HourlyCost { get; set; }
    }
}
