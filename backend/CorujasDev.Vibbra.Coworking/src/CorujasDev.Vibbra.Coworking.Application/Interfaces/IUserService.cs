using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;

namespace CorujasDev.Vibbra.Coworking.Application.Interfaces
{
    public interface IUserService
    {
        IEnumerable<UserViewModel> GetAll();
    }
}
