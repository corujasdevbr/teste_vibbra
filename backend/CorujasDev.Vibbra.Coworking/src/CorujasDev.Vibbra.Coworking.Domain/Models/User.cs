using CorujasDev.Vibbra.Coworking.Core.DomainObjects;
using CorujasDev.Vibbra.Coworking.Core.Enum;

namespace CorujasDev.Vibbra.Coworking.Domain.Models
{
    public class User : Entity
    {
        public string UserName { get; private set; }
        public string CompanyName { get; private set; }
        public string CNPJ { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }
        public Professional Professional { get; private set; }
        public EnTypeUser TypeUser { get; set; }
        
        

        public User()
        {
            
        }

        public User(string userName, string companyName, string cnpj, string email, string password, Professional professional, EnTypeUser typeUser)
        {
            UserName = userName;
            CompanyName = companyName;
            CNPJ = cnpj;
            Email = email;
            Password = password;
            TypeUser = typeUser;
            Professional = professional;
        }
    }
}
