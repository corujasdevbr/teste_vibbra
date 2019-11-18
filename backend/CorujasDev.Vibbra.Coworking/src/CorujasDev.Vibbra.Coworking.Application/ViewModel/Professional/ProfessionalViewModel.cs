using System;
using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Reserve;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.Professional
{
    public class ProfessionalViewModel : BaseViewModel
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
        public UserViewModel User { get; set; }
        public Guid UserId { get; set; }
        public ICollection<ReserveViewModel> Reserves { get; set; }
    }
}
