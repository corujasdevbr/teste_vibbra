using System;
using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;

namespace CorujasDev.Vibbra.Coworking.Application.Interfaces
{
    public interface IAccountService : IDisposable
    {
        IEnumerable<UserViewModel> GetAll();
        UserViewModel GetById(Guid id);
        void Add(CreateUserViewModel obj);
        void Add(CreateProfessionalViewModel obj);
        void Update(UserViewModel obj);
        void Delete(Guid id);
        UserViewModel Login(LoginViewModel login);
    }
}