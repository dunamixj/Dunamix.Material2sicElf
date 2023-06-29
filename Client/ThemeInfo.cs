using Oqtane.Documentation;
using Oqtane.Models;
using Oqtane.Themes;

namespace Dunamix.Material2SicElf.Client
{
    [PrivateApi("Mark Build-In Theme-Info classes as private, since it's not very useful in the public docs")]
    public class ThemeInfo : ITheme
    {
        public Theme Theme => new Theme
        {
            Name = "Material 2SicElf",
            Version = "3.3.0",
            ThemeSettingsType = "Oqtane.Themes.OqtaneTheme.ThemeSettings, Oqtane.Client",
            ContainerSettingsType = "Oqtane.Themes.OqtaneTheme.ContainerSettings, Oqtane.Client"
        };
    }
}
  
