using System;
using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Core.DomainObjects;

namespace CorujasDev.Vibbra.Coworking.Domain.Models
{
    public class Professional : Entity
    {
        public string Name { get; private set; }
        public string RG { get; private set; }
        public string CPF { get; private set; }
        public string Profession { get; private set; }
        public string Linkedin { get; private set; }
        public string Facebook { get; private set; }
        public string Twitter { get; private set; }
        public string CelPhone { get; private set; }
        public string Telephone { get; private set; }
        public string City { get; private set; }
        public string State { get; private set; }
        public User User { get; set; }
        public Guid UserId { get; set; }
        public ICollection<Reserve> Reserves { get; set; }

        public Professional()
        {
            
        }

        public Professional(string name, string rg, string cpf,string profession = null, string linkedin = null, string facebook = null, string twitter = null, string celPhone = null, string telephone = null, string city = null, string state = null)
        {
            Name = name;
            RG = rg;
            CPF = cpf;
            Profession = profession;
            Linkedin = linkedin;
            Facebook = facebook;
            Twitter = twitter;
            CelPhone = celPhone;
            Telephone = telephone;
            City = city;
            State = state;
        }

    }
}
