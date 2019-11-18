using System.Collections.Generic;
using AutoMapper;
using CorujasDev.Vibbra.Coworking.Application.Interfaces;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;
using CorujasDev.Vibbra.Coworking.Domain.Interfaces;

namespace CorujasDev.Vibbra.Coworking.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public IEnumerable<UserViewModel> GetAll()
        {
            var list = _userRepository.GetAll();
            return _mapper.Map<IEnumerable<UserViewModel>>(list);
        }
    }
}
