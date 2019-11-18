using System.Collections;
using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Core.DomainObjects;
using CorujasDev.Vibbra.Coworking.Core.Enum;

namespace CorujasDev.Vibbra.Coworking.Domain.Models
{
    public class Place : Entity
    {
        public string Name { get; set; }
        public EnTypePlace TypePlace { get; private set; }
        public string Cep { get; set; }
        public string Address { get; private set; }
        public string District { get; private set; }
        public string City { get; private set; }
        public string State { get; private set; }
        public string Image { get; private set; }
        public int NumberTables { get; private set; }
        public int NumberChairs { get; private set; }
        public decimal HourlyCost { get; private set; }
        public ICollection<Reserve> Reserves { get; set; }

        public Place()
        {
            
        }
        public Place(string name, EnTypePlace typePlace, string cep, string address, string district, string city, string state, int numberTables, int numberChairs, string image, decimal hourlyCost)
        {
            Name = name;
            TypePlace = typePlace;
            Cep = cep;
            Address = address;
            District = district;
            City = city;
            State = state;
            NumberChairs = numberChairs;
            NumberTables = numberTables;
            HourlyCost = hourlyCost;
            Image = image;
        }
    }
}
