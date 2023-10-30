import { Component, OnInit } from '@angular/core';
import { Hotel, Room } from './models/rooms.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 7;

  isRoomCountShown = true;

  hotel: Hotel = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList!: Room[];

  selectedRoom!: Room;

  ngOnInit(): void {
    this.roomsList = [
      {
        type: 'Standard Room',
        roomNumber: 235,
        amenities: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
        price: 9152.0,
        isAvailable: true,
        photos: [
          'https://si.edu/praesent.xml?eget=a&elit=ipsum&sodales=integer&scelerisque=a&mauris=nibh&sit=in&amet=quis&eros=justo&suspendisse=maecenas&accumsan=rhoncus&tortor=aliquam&quis=lacus&turpis=morbi&sed=quis&ante=tortor&vivamus=id&tortor=nulla&duis=ultrices&mattis=aliquet&egestas=maecenas&metus=leo&aenean=odio&fermentum=condimentum&donec=id&ut=luctus&mauris=nec&eget=molestie&massa=sed&tempor=justo&convallis=pellentesque&nulla=viverra&neque=pede&libero=ac&convallis=diam&eget=cras&eleifend=pellentesque&luctus=volutpat&ultricies=dui&eu=maecenas&nibh=tristique&quisque=est&id=et&justo=tempus&sit=semper&amet=est&sapien=quam&dignissim=pharetra&vestibulum=magna&vestibulum=ac&ante=consequat&ipsum=metus&primis=sapien&in=ut&faucibus=nunc&orci=vestibulum&luctus=ante&et=ipsum&ultrices=primis&posuere=in&cubilia=faucibus&curae=orci&nulla=luctus&dapibus=et&dolor=ultrices&vel=posuere&est=cubilia&donec=curae&odio=mauris&justo=viverra&sollicitudin=diam&ut=vitae&suscipit=quam&a=suspendisse&feugiat=potenti&et=nullam&eros=porttitor&vestibulum=lacus&ac=at&est=turpis&lacinia=donec&nisi=posuere&venenatis=metus&tristique=vitae&fusce=ipsum&congue=aliquam&diam=non&id=mauris',
        ],
        checkIn: new Date('11/26/2023'),
        checkOut: new Date('12/7/2023'),
      },
      {
        type: 'Penthouse Suite',
        roomNumber: 483,
        amenities: 'Cras pellentesque volutpat dui.',
        price: 7953.52,
        isAvailable: false,
        photos: [
          'https://privacy.gov.au/pede/posuere/nonummy/integer.xml?risus=congue&praesent=diam&lectus=id&vestibulum=ornare&quam=imperdiet&sapien=sapien',
          'http://tinyurl.com/nulla/quisque/arcu/libero/rutrum/ac.jsp?odio=pede&justo=lobortis&sollicitudin=ligula&ut=sit&suscipit=amet&a=eleifend&feugiat=pede&et=libero&eros=quis&vestibulum=orci&ac=nullam&est=molestie&lacinia=nibh&nisi=in&venenatis=lectus&tristique=pellentesque&fusce=at&congue=nulla&diam=suspendisse&id=potenti&ornare=cras&imperdiet=in&sapien=purus&urna=eu&pretium=magna&nisl=vulputate&ut=luctus&volutpat=cum&sapien=sociis&arcu=natoque&sed=penatibus&augue=et&aliquam=magnis&erat=dis&volutpat=parturient&in=montes&congue=nascetur&etiam=ridiculus&justo=mus&etiam=vivamus&pretium=vestibulum&iaculis=sagittis&justo=sapien&in=cum&hac=sociis&habitasse=natoque&platea=penatibus&dictumst=et&etiam=magnis&faucibus=dis&cursus=parturient&urna=montes&ut=nascetur&tellus=ridiculus&nulla=mus&ut=etiam&erat=vel&id=augue&mauris=vestibulum&vulputate=rutrum&elementum=rutrum&nullam=neque&varius=aenean&nulla=auctor&facilisi=gravida&cras=sem&non=praesent&velit=id&nec=massa&nisi=id&vulputate=nisl&nonummy=venenatis&maecenas=lacinia&tincidunt=aenean&lacus=sit&at=amet&velit=justo&vivamus=morbi&vel=ut&nulla=odio&eget=cras&eros=mi&elementum=pede&pellentesque=malesuada&quisque=in&porta=imperdiet&volutpat=et&erat=commodo&quisque=vulputate&erat=justo&eros=in&viverra=blandit&eget=ultrices',
        ],
        checkIn: new Date('11/4/2023'),
        checkOut: new Date('11/30/2023'),
      },
      {
        type: 'Penthouse Suite',
        roomNumber: 38,
        amenities:
          'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        price: 2931.88,
        isAvailable: true,
        photos: [
          'http://scribd.com/at.js?ut=in&massa=sapien&volutpat=iaculis&convallis=congue&morbi=vivamus&odio=metus&odio=arcu&elementum=adipiscing&eu=molestie&interdum=hendrerit&eu=at&tincidunt=vulputate&in=vitae&leo=nisl&maecenas=aenean&pulvinar=lectus&lobortis=pellentesque&est=eget&phasellus=nunc&sit=donec&amet=quis&erat=orci&nulla=eget&tempus=orci&vivamus=vehicula&in=condimentum&felis=curabitur&eu=in&sapien=libero&cursus=ut&vestibulum=massa&proin=volutpat&eu=convallis&mi=morbi&nulla=odio&ac=odio&enim=elementum&in=eu&tempor=interdum&turpis=eu&nec=tincidunt&euismod=in&scelerisque=leo&quam=maecenas&turpis=pulvinar&adipiscing=lobortis&lorem=est&vitae=phasellus&mattis=sit&nibh=amet&ligula=erat&nec=nulla&sem=tempus&duis=vivamus&aliquam=in&convallis=felis',
          'http://wufoo.com/vel/nisl/duis/ac/nibh/fusce/lacus.js?maecenas=eget&rhoncus=tincidunt&aliquam=eget&lacus=tempus&morbi=vel&quis=pede&tortor=morbi&id=porttitor&nulla=lorem&ultrices=id&aliquet=ligula&maecenas=suspendisse&leo=ornare&odio=consequat&condimentum=lectus&id=in&luctus=est&nec=risus&molestie=auctor&sed=sed&justo=tristique&pellentesque=in&viverra=tempus&pede=sit&ac=amet&diam=sem&cras=fusce&pellentesque=consequat&volutpat=nulla&dui=nisl&maecenas=nunc&tristique=nisl&est=duis&et=bibendum&tempus=felis&semper=sed&est=interdum&quam=venenatis&pharetra=turpis&magna=enim&ac=blandit&consequat=mi&metus=in&sapien=porttitor&ut=pede&nunc=justo&vestibulum=eu&ante=massa&ipsum=donec&primis=dapibus&in=duis&faucibus=at&orci=velit&luctus=eu&et=est&ultrices=congue&posuere=elementum&cubilia=in&curae=hac&mauris=habitasse&viverra=platea&diam=dictumst',
        ],
        checkIn: new Date('11/4/2023'),
        checkOut: new Date('12/5/2023'),
      },
      {
        type: 'Family Room',
        roomNumber: 598,
        amenities:
          'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
        price: 8805.8,
        isAvailable: false,
        photos: [
          'https://cafepress.com/nulla.xml?quis=mauris&odio=enim&consequat=leo&varius=rhoncus&integer=sed&ac=vestibulum&leo=sit&pellentesque=amet&ultrices=cursus&mattis=id&odio=turpis&donec=integer&vitae=aliquet&nisi=massa&nam=id&ultrices=lobortis&libero=convallis&non=tortor&mattis=risus&pulvinar=dapibus&nulla=augue&pede=vel&ullamcorper=accumsan',
          'https://who.int/odio/consequat/varius/integer.js?donec=in&ut=leo&dolor=maecenas&morbi=pulvinar&vel=lobortis&lectus=est&in=phasellus&quam=sit&fringilla=amet&rhoncus=erat&mauris=nulla&enim=tempus&leo=vivamus&rhoncus=in&sed=felis&vestibulum=eu&sit=sapien&amet=cursus&cursus=vestibulum&id=proin&turpis=eu&integer=mi&aliquet=nulla&massa=ac&id=enim&lobortis=in&convallis=tempor&tortor=turpis&risus=nec&dapibus=euismod&augue=scelerisque&vel=quam&accumsan=turpis&tellus=adipiscing&nisi=lorem&eu=vitae&orci=mattis&mauris=nibh&lacinia=ligula&sapien=nec&quis=sem&libero=duis&nullam=aliquam&sit=convallis&amet=nunc&turpis=proin&elementum=at&ligula=turpis&vehicula=a&consequat=pede&morbi=posuere&a=nonummy&ipsum=integer&integer=non&a=velit&nibh=donec&in=diam&quis=neque&justo=vestibulum&maecenas=eget&rhoncus=vulputate&aliquam=ut&lacus=ultrices&morbi=vel&quis=augue&tortor=vestibulum&id=ante&nulla=ipsum&ultrices=primis&aliquet=in&maecenas=faucibus&leo=orci&odio=luctus&condimentum=et&id=ultrices&luctus=posuere&nec=cubilia&molestie=curae&sed=donec&justo=pharetra&pellentesque=magna',
          'https://examiner.com/nibh/in/lectus/pellentesque/at/nulla/suspendisse.jpg?ultrices=a&erat=odio&tortor=in&sollicitudin=hac&mi=habitasse&sit=platea&amet=dictumst&lobortis=maecenas&sapien=ut&sapien=massa&non=quis&mi=augue&integer=luctus&ac=tincidunt&neque=nulla&duis=mollis&bibendum=molestie&morbi=lorem&non=quisque&quam=ut&nec=erat&dui=curabitur&luctus=gravida&rutrum=nisi&nulla=at&tellus=nibh&in=in&sagittis=hac&dui=habitasse&vel=platea&nisl=dictumst&duis=aliquam&ac=augue&nibh=quam&fusce=sollicitudin&lacus=vitae&purus=consectetuer&aliquet=eget&at=rutrum&feugiat=at&non=lorem&pretium=integer&quis=tincidunt&lectus=ante&suspendisse=vel&potenti=ipsum&in=praesent&eleifend=blandit&quam=lacinia&a=erat&odio=vestibulum&in=sed&hac=magna&habitasse=at&platea=nunc&dictumst=commodo&maecenas=placerat&ut=praesent&massa=blandit&quis=nam&augue=nulla&luctus=integer&tincidunt=pede&nulla=justo&mollis=lacinia&molestie=eget&lorem=tincidunt&quisque=eget&ut=tempus&erat=vel&curabitur=pede&gravida=morbi&nisi=porttitor&at=lorem&nibh=id&in=ligula&hac=suspendisse&habitasse=ornare&platea=consequat&dictumst=lectus&aliquam=in&augue=est',
        ],
        checkIn: new Date('11/17/2023'),
        checkOut: null,
      },
      {
        type: 'Family Room',
        roomNumber: 35,
        amenities:
          'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
        price: 3862.16,
        isAvailable: true,
        photos: [
          'https://auda.org.au/vel/pede/morbi/porttitor/lorem/id.aspx?platea=elit&dictumst=proin&morbi=risus&vestibulum=praesent&velit=lectus&id=vestibulum&pretium=quam&iaculis=sapien&diam=varius&erat=ut&fermentum=blandit&justo=non&nec=interdum&condimentum=in&neque=ante&sapien=vestibulum&placerat=ante&ante=ipsum&nulla=primis&justo=in&aliquam=faucibus&quis=orci',
        ],
        checkIn: new Date('11/26/2023'),
        checkOut: new Date('12/1/2023'),
      },
      {
        type: 'Penthouse Suite',
        roomNumber: 823,
        amenities: 'Nullam porttitor lacus at turpis.',
        price: 3725.73,
        isAvailable: false,
        photos: [
          'https://photobucket.com/purus.jpg?sed=in&interdum=leo&venenatis=maecenas&turpis=pulvinar&enim=lobortis&blandit=est&mi=phasellus&in=sit&porttitor=amet&pede=erat&justo=nulla&eu=tempus&massa=vivamus&donec=in&dapibus=felis&duis=eu&at=sapien&velit=cursus&eu=vestibulum&est=proin&congue=eu&elementum=mi&in=nulla&hac=ac&habitasse=enim&platea=in&dictumst=tempor&morbi=turpis&vestibulum=nec&velit=euismod&id=scelerisque&pretium=quam&iaculis=turpis&diam=adipiscing&erat=lorem&fermentum=vitae&justo=mattis&nec=nibh&condimentum=ligula&neque=nec&sapien=sem&placerat=duis&ante=aliquam&nulla=convallis&justo=nunc&aliquam=proin&quis=at&turpis=turpis&eget=a&elit=pede&sodales=posuere&scelerisque=nonummy&mauris=integer&sit=non&amet=velit&eros=donec&suspendisse=diam&accumsan=neque&tortor=vestibulum&quis=eget&turpis=vulputate&sed=ut&ante=ultrices&vivamus=vel&tortor=augue',
          'https://unicef.org/lacus/purus/aliquet.html?volutpat=donec&convallis=diam&morbi=neque&odio=vestibulum&odio=eget&elementum=vulputate&eu=ut&interdum=ultrices&eu=vel&tincidunt=augue',
        ],
        checkIn: new Date('11/14/2023'),
        checkOut: new Date('12/2/2023'),
      },
      {
        type: 'Standard Room',
        roomNumber: 730,
        amenities: 'Phasellus in felis. Donec semper sapien a libero.',
        price: 1652.81,
        isAvailable: true,
        photos: [
          'http://nature.com/ipsum/integer/a/nibh/in/quis/justo.aspx?non=diam&mauris=vitae&morbi=quam&non=suspendisse&lectus=potenti&aliquam=nullam&sit=porttitor&amet=lacus&diam=at&in=turpis&magna=donec&bibendum=posuere&imperdiet=metus&nullam=vitae&orci=ipsum&pede=aliquam&venenatis=non&non=mauris&sodales=morbi&sed=non&tincidunt=lectus&eu=aliquam&felis=sit&fusce=amet&posuere=diam&felis=in&sed=magna&lacus=bibendum&morbi=imperdiet&sem=nullam&mauris=orci&laoreet=pede&ut=venenatis&rhoncus=non&aliquet=sodales&pulvinar=sed&sed=tincidunt&nisl=eu&nunc=felis&rhoncus=fusce&dui=posuere&vel=felis&sem=sed&sed=lacus&sagittis=morbi&nam=sem&congue=mauris&risus=laoreet&semper=ut&porta=rhoncus&volutpat=aliquet&quam=pulvinar&pede=sed&lobortis=nisl&ligula=nunc&sit=rhoncus&amet=dui&eleifend=vel&pede=sem&libero=sed&quis=sagittis&orci=nam&nullam=congue&molestie=risus&nibh=semper&in=porta&lectus=volutpat&pellentesque=quam&at=pede&nulla=lobortis&suspendisse=ligula&potenti=sit&cras=amet',
          'https://sphinn.com/pede/malesuada/in/imperdiet.html?nec=orci&nisi=nullam&volutpat=molestie&eleifend=nibh&donec=in&ut=lectus&dolor=pellentesque&morbi=at&vel=nulla&lectus=suspendisse&in=potenti&quam=cras&fringilla=in&rhoncus=purus',
          'http://tamu.edu/vestibulum/aliquet/ultrices/erat/tortor.xml?in=tortor&hac=id&habitasse=nulla&platea=ultrices&dictumst=aliquet&etiam=maecenas&faucibus=leo&cursus=odio&urna=condimentum&ut=id&tellus=luctus&nulla=nec&ut=molestie&erat=sed&id=justo&mauris=pellentesque&vulputate=viverra&elementum=pede&nullam=ac&varius=diam&nulla=cras&facilisi=pellentesque&cras=volutpat&non=dui&velit=maecenas&nec=tristique&nisi=est&vulputate=et&nonummy=tempus&maecenas=semper&tincidunt=est&lacus=quam&at=pharetra&velit=magna',
        ],
        checkIn: new Date('11/11/2023'),
      },
    ];
  }

  toggle() {
    this.isRoomCountShown = !this.isRoomCountShown;
  }

  selectRoom(room: Room) {
    console.log(room);
    this.selectedRoom = room;
  }
}
