import {ReactElement} from 'react';
import firebase from 'firebase';
import {Avatar} from '@material-ui/core';
import {useDownloadURL} from 'react-firebase-hooks/storage';
import {INetDoc} from '_types';

export const NetCard = ({net}: {net: INetDoc}): ReactElement => {
  const ST = firebase.storage();
  const [image] = useDownloadURL(ST.ref(`${net.id}/logo.png`));
  return (
    <div>
      Collection: {net.id}
      <Avatar variant="rounded" src={image} />
      <p>
        {net.id}:{JSON.stringify(net.data())}
      </p>
    </div>
  );
};

export default NetCard;
