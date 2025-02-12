import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import icognito from '../../svgs/incognito.svg'
import { items } from '../../data/items';


type Props = {
    item: GridItemType
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return(
        <C.Container 
            showBackGround={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={icognito} alt="icone de icognito" opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item != null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    );
}