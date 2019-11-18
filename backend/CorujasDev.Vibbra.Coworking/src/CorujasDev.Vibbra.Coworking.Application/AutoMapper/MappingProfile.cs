using AutoMapper;
using CorujasDev.Vibbra.Coworking.Application.ViewModel;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Place;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Professional;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;
using CorujasDev.Vibbra.Coworking.Core.DomainObjects;
using CorujasDev.Vibbra.Coworking.Domain.Models;

namespace CorujasDev.Vibbra.Coworking.Application.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<Entity, BaseViewModel>()
                .ReverseMap();

            CreateMap<User, UserViewModel>()
                .ReverseMap();

            CreateMap<Professional, ProfessionalViewModel>()
                .ReverseMap();

            CreateMap<User, CreateUserViewModel>()
                .ReverseMap();

            CreateMap<Place, PlaceViewModel>()
                .ReverseMap();

            CreateMap<Place, CreatePlaceViewModel>()
                .ReverseMap();

            CreateMap<Place, UpdatePlaceViewModel>()
                .ReverseMap();
        }
    }
}
