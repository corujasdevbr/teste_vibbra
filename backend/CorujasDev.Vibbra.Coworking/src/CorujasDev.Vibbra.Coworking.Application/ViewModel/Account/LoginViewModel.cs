using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.Account
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o email")]
        [EmailAddress(ErrorMessage = "Email inválido")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe o password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
