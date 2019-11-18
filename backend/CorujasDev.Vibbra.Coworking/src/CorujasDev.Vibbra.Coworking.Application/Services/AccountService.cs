using System;
using System.Collections.Generic;
using AutoMapper;
using CorujasDev.Vibbra.Coworking.Application.Interfaces;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;
using CorujasDev.Vibbra.Coworking.Core.Enum;
using CorujasDev.Vibbra.Coworking.Domain.Interfaces;
using CorujasDev.Vibbra.Coworking.Domain.Models;

namespace CorujasDev.Vibbra.Coworking.Application.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUserRepository _userRepository;
        private readonly IProfessionalRepository _professionalRepository;
        private readonly IMapper _mapper;

        public AccountService(IUserRepository repository, IProfessionalRepository professionalRepository, IMapper mapper)
        {
            _userRepository = repository;
            _professionalRepository = professionalRepository;
            _mapper = mapper;
        }


        public void Delete(Guid id)
        {
            var user = GetById(id);

            if(user == null)
                throw  new Exception("Usuário não encontrado");

            _userRepository.Add(_mapper.Map<User>(user));

            _userRepository.UnitOfWork.Commit();
        }

        public IEnumerable<UserViewModel> GetAll()
        {
            var obj = _userRepository.GetAll();
            return _mapper.Map<IEnumerable<UserViewModel>>(obj);
        }

        public UserViewModel GetById(Guid id)
        {
            var obj = _userRepository.GetById(id);
            return _mapper.Map<UserViewModel>(obj);
        }

        public UserViewModel Login(LoginViewModel login)
        {
            var user = _userRepository.Login(login.Email, login.Password);
            return _mapper.Map<UserViewModel>(user);
        }

        public void Update(UserViewModel obj)
        {
            _userRepository.Update(_mapper.Map<User>(obj));
            _userRepository.UnitOfWork.Commit();
        }

        public void Add(CreateUserViewModel obj)
        {
            _userRepository.Add(_mapper.Map<User>(obj));
            _userRepository.UnitOfWork.Commit();

        }

        public void Add(CreateProfessionalViewModel obj)
        {
            Professional newProfessional = new Professional(obj.Name, obj.Rg, obj.Cpf);

            User newUser = new User(obj.UserName,null,null,obj.Email,obj.Password, newProfessional,EnTypeUser.Professional );

            _userRepository.Add(_mapper.Map<User>(newUser));
            _userRepository.UnitOfWork.Commit();
        }

        public void Dispose()
        {
            _userRepository?.Dispose();
            _professionalRepository?.Dispose();
        }
    }
}
