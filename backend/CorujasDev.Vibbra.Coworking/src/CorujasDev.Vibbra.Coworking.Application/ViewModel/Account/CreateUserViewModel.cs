using System.ComponentModel.DataAnnotations;
using CorujasDev.Vibbra.Coworking.Core.Enum;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.Account
{
    public class CreateUserViewModel
    {
        [Required(ErrorMessage = "Informe o username")]
        public string UserName { get; set; }
        public string CompanyName { get; set; }
        public string CNPJ { get; set; }
        [Required(ErrorMessage = "Informe o email")]
        [EmailAddress(ErrorMessage = "E-mail inválido")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required(ErrorMessage = "Informe a senha")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required(ErrorMessage = "Informe o tipo de usuário")]
        public EnTypeUser TypeUser { get; set; }
    }
}
