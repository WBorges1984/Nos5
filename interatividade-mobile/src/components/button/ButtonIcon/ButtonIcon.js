import { Image } from 'react-native';
import { ICON_MAP } from '../../../constants/icon.config';


function ButtonIcon({ iconName }) {
  const iconData = ICON_MAP[iconName];

  // Se o ícone não existir no mapa, não renderiza nada para evitar erros
  if (!iconData) {
    return null;
  }

  return <Image source={iconData.source} style={{ width: iconData.style.width, height: iconData.style.height }} />;
}

export default ButtonIcon;