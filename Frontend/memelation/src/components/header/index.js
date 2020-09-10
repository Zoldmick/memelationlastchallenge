import React from 'react'
import {MenuWrapper, Img, OptionButton, Button} from './styled'
import Memelation from '../../assets/Memelation.png'

function Header() {
    return (
        <MenuWrapper>
            <Img>
                <img src = {Memelation} alt = "Logo tipo memelation do site" />
            </Img>

            <OptionButton>
                <Button>Cadastrar</Button>
            </OptionButton>

        </MenuWrapper>
    );
}

export default Header;