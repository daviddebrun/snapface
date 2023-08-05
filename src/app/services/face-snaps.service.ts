import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 100,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Canada lake mountains',
      description: 'Ma prochaine destination !',
      createdDate: new Date(),
      snaps: 54,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg',
    },
    {
      id: 3,
      title: 'Fox',
      description: 'Un très beau renard des neiges',
      createdDate: new Date(),
      snaps: 123,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/03/01/15/30/fox-4893199_1280.jpg',
      location: 'Nature',
    },
    {
      id: 4,
      title: 'Coucher de soleil',
      description: 'Superbe coucher de soleil',
      createdDate: new Date(),
      snaps: 456,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/05/28/05/36/sunset-1421010_1280.jpg',
      location: 'Canada',
    },
    {
      id: 5,
      title: 'Mon ours préféré',
      description: 'Tellement beau !',
      createdDate: new Date(),
      snaps: 698,
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/07/29/06/41/polar-bear-404314_1280.jpg',
      location: 'Canada',
    },
    {
      id: 6,
      title: 'Niagara falls',
      description: 'Bien pour se rafraîchir !',
      createdDate: new Date(),
      snaps: 1200,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/04/16/11/41/waterfall-5050298_1280.jpg',
      location: 'Canada',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
