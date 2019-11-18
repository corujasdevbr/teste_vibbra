using System.ComponentModel.DataAnnotations;
using CorujasDev.Vibbra.Coworking.Core.Enum;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.Account
{
    public class CreateProfessionalViewModel
    {
        [Required(ErrorMessage = "Informe o username")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Informe o seu Nome")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Informe o número do Celular")]
        public string Celphone { get; set; }

        [Required(ErrorMessage = "Informe o cpf")]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "Informe o rg")]
        public string Rg { get; set; }

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
