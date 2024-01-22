import { useMemo } from 'react';

import * as SC from './PlayBoardStyles'

import { IBoard } from '../../utils/interfaces';

import redSmall from '../../assets/images/counter-red-small.svg'
import yellowSmall from '../../assets/images/counter-yellow-small.svg'


const PlayBoardItem:React.FC<Partial <IBoard>> = ({coord, idx}) => {

const {xIdx, yIdx} = idx!;


let matchCells:any


// eslint-disable-next-line react-hooks/exhaustive-deps
useMemo(() => matchCells = coord.find((el:any) => el.x === xIdx && el.y === yIdx), [coord])


    return ( <SC.Cell img={matchCells && matchCells.player === "player1" ? redSmall : matchCells && matchCells.player !== "player1" ? yellowSmall : null}></SC.Cell> );
}
 
export default PlayBoardItem;