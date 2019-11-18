using System;
using System.Collections.Generic;
using System.Text;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel
{
    public class BaseViewModel
    {
        public Guid Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdate { get; set; }

        protected BaseViewModel()
        {
            //Sempre que uma classe é instanciada é criado um Guid
            Id = Guid.NewGuid();
        }
    }
}
