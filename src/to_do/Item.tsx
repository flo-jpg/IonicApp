import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { ItemProperties } from './ItemProperties';

interface ItemPropsExt extends ItemProperties {
    onEdit: (_id?: string) => void;
}

const Item: React.FC<ItemPropsExt> = ({ _id, text, onEdit }) => {
    return (
        <IonItem onClick={() => onEdit(_id)}>
            <IonLabel>{text}</IonLabel>
        </IonItem>
    );
};

export default Item;
