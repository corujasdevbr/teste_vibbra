using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Professional;
using CorujasDev.Vibbra.Coworking.Core.Enum;

namespace CorujasDev.Vibbra.Coworking.Application.ViewModel.User
{
    public class UserViewModel : BaseViewModel
    {
        
        public string UserName { get; set; }
        public string CompanyName { get; set; }
        public string CNPJ { get; private set; }
        public string Email { get; private set; }
        public EnTypeUser TypeUser { get; set; }
        public ProfessionalViewModel Professional { get; set; }

        public UserViewModel()
        {

        }

        public UserViewModel(string userName, string companyName, string cnpj, string email, EnTypeUser typeUser)
        {
            UserName = userName;
            CompanyName = companyName;
            CNPJ = cnpj;
            Email = email;
            TypeUser = typeUser;
        }
    }
}
