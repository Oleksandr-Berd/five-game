import * as SC from './PlayBoardStyles'

import { IBoard } from '../../utils/interfaces';

import redCellSmall from '../../assets/images/counter-red-small.svg'

const PlayBoardItem:React.FC<Partial <IBoard>> = ({coord, idx}) => {

const {x, y} = coord!;
const {xIdx, yIdx} = idx!;


const matchCells = coord.find((el:any) => el.x === xIdx && el.y === yIdx)

console.log(matchCells);


    return ( <SC.Cell img={matchCells ? redCellSmall : null}></SC.Cell> );
}
 
export default PlayBoardItem;