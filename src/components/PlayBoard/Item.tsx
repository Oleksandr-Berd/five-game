import { useMemo } from 'react';

import * as SC from './PlayBoardStyles'

import { IBoard } from '../../utils/interfaces';

import redCellSmall from '../../assets/images/counter-red-small.svg'

const PlayBoardItem:React.FC<Partial <IBoard>> = ({coord, idx}) => {

const {xIdx, yIdx} = idx!;


let matchCells

// eslint-disable-next-line react-hooks/exhaustive-deps
useMemo(() => matchCells = coord.find((el:any) => el.x === xIdx && el.y === yIdx), [coord])

    return ( <SC.Cell img={matchCells ? redCellSmall : null}></SC.Cell> );
}
 
export default PlayBoardItem;