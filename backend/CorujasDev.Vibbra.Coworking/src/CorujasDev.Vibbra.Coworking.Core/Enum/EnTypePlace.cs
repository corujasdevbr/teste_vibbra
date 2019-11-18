using System.ComponentModel;

namespace CorujasDev.Vibbra.Coworking.Core.Enum
{
    public enum EnTypePlace
    {
        [Description("Sala")]
        Sala = 1,
        [Description("Sala de Reunião")]
        SalaReuniao,
        [Description("Sala com videoconferência")]
        SalaVideoconferencia,
        [Description("Lounge")]
        Lounge
    }
}
