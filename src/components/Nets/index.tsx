import {ReactElement} from 'react';
import {INetDoc} from '_types';
import NetCard from './NetCard';
import AddNet from './AddNet';

export const Nets = ({nets}: {nets: INetDoc[]}): ReactElement => {
  if (nets.length) {
    return (
      <div>
        {nets.map((doc) => (
          <NetCard net={doc} key={doc.id} />
        ))}
      </div>
    );
  } else {
    return <AddNet />;
  }
};

export default Nets;
