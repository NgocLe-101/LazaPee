'use strict';
import { hash } from 'bcrypt';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        full_name: 'Nguyễn Văn Bảo',
        email: 'VanBao113@gmail.com',
        username: 'BaoRen112',
        password: await hash('VanBaoNguyen@@@123', 10), 
        avatar: 'https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg',
        phone: '0977466534',
        address: '38, Bùi Thị Xuân, Quận 1, TP.HCM',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Phạm Trần Tiến',
        email: 'PTTien@gmail.com',
        username: 'janesmith',
        password: await hash('janesmith@446HH',10), 
        avatar: 'https://bom.so/xQdpvk',
        phone: '0987654321',
        address: '84 Nguyễn Du, Quận 2, TP.HCM',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Nguyễn Văn Lên',
        email: 'alice.brown@gmail.com',
        username: 'alicebrown',
        password: await hash('aliceNguyen###99',10), 
        avatar: 'https://bom.so/UIXkAF',
        phone: '0777466534',
        address: '227 Nguyễn Văn Cừ, Quận 5, TP.HCM',
        role: 'seller',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Nguyễn Hữu Hải',
        email: 'johnsonHai@gmail.com.com',
        username: 'johnsonHai',
        password: await hash('HaiNguyenjohnson@@@123',10), 
        avatar: 'https://bom.so/9uaucQ',
        phone: '0344561184',
        address: '37 Bùi Thị Xuân, Phú Phong, Bình Dương',
        role: 'seller',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Thái Đình Ngân',
        email: 'TDNganJony@gmail.com',
        username: 'NganJony447',
        password: await hash('NganJony447@#$', 10),
        avatar: 'https://bom.so/sagDkS',
        phone: '0775664115',
        address: '114, Nguyễn Lữ, Tuy Hòa, Phú Yên',
        role: 'seller',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Nguyễn Thị Hồng',
        email: 'HongNguyen1999@gmail.com',
        username: 'HongNguyen1999',
        password: await hash('HongNguyen1999@@@123',10),
        avatar: 'https://bom.so/y1NOSR',
        phone: '0377561184',
        address: '118 Bùi Thị Xuân, Cát Lái, Bình Dương',
        role: 'seller',
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        full_name: 'Steffen Cuningham',
        email: 'scuningham0@google.cn',
        username: 'scuningham0',
        password: await hash('nU8{>!nM8P<0|M>', 10),
        avatar: 'http://dummyimage.com/139x100.png/dddddd/000000',
        phone: '3494665780',
        address: '8139 Maryland Avenue',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Nicol Birkmyre',
        email: 'nbirkmyre1@irs.gov',
        username: 'nbirkmyre1',
        password: await hash('fE6}9s%DQc{Pz', 10),
        avatar: 'http://dummyimage.com/202x100.png/5fa2dd/ffffff',
        phone: '5947034916',
        address: '22744 Shelley Point',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Isaak McGoldrick',
        email: 'imcgoldrick2@va.gov',
        username: 'imcgoldrick2',
        password: await hash('iY6=r?7Ec8f', 10),
        avatar: 'http://dummyimage.com/112x100.png/ff4444/ffffff',
        phone: '2008548069',
        address: '64979 Northport Avenue',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Tybie Shailer',
        email: 'tshailer3@sciencedirect.com',
        username: 'tshailer3',
        password: await hash('jD4!y+Xa+6u?2rB', 10),
        avatar: 'http://dummyimage.com/248x100.png/5fa2dd/ffffff',
        phone: '2115743007',
        address: '09144 Jenifer Alley',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Randie Strang',
        email: 'rstrang4@tinypic.com',
        username: 'rstrang4',
        password: await hash('dI2(8!igoN%zv7zd', 10),
        avatar: 'http://dummyimage.com/172x100.png/cc0000/ffffff',
        phone: '7085995206',
        address: '8469 Buhler Plaza',
        role: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  },
};
