const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero изображение
  {
    url: 'https://optim.tildacdn.com/tild3838-3466-4438-a666-313162356137/-/resize/818x661/-/format/webp/3Generated_Image_Oct.png.webp',
    path: 'public/images/hero-equipment.webp'
  },
  // Фоновые изображения
  {
    url: 'https://optim.tildacdn.com/tild3262-6663-4137-b764-373837323766/-/format/webp/-1_1.jpg.webp',
    path: 'public/images/background-pattern.webp'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/IMG_20251003_104509_.jpg.webp',
    path: 'public/images/contact-background.webp'
  },
  {
    url: 'https://optim.tildacdn.com/tild3035-6330-4630-b063-316466356464/-/format/webp/---.png.webp',
    path: 'public/images/specifications-bg.webp'
  },
  // Иконки продуктов
  {
    url: 'https://static.tildacdn.com/tild3866-3136-4265-b165-373638386339/-2.svg',
    path: 'public/icons/reactor.svg'
  },
  {
    url: 'https://static.tildacdn.com/tild3134-6632-4532-b436-363733386465/-3.svg',
    path: 'public/icons/bioreactor.svg'
  },
  {
    url: 'https://static.tildacdn.com/tild3034-6531-4437-b966-336139663538/-.svg',
    path: 'public/icons/mixer.svg'
  },
  {
    url: 'https://static.tildacdn.com/tild6334-3333-4165-b761-656535656630/-4.svg',
    path: 'public/icons/column.svg'
  },
  {
    url: 'https://static.tildacdn.com/tild3835-3839-4530-b836-336664626464/-5.svg',
    path: 'public/icons/receiver.svg'
  },
  // Иконки компетенций
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-.svg',
    path: 'public/icons/competency-design.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-2.svg',
    path: 'public/icons/competency-production.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-3.svg',
    path: 'public/icons/competency-testing.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-4.svg',
    path: 'public/icons/competency-installation.svg'
  },
  // Иконки преимуществ
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-5.svg',
    path: 'public/icons/advantage-experience.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-6.svg',
    path: 'public/icons/advantage-quality.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-7.svg',
    path: 'public/icons/advantage-deadlines.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-8.svg',
    path: 'public/icons/advantage-support.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-9.svg',
    path: 'public/icons/advantage-price.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-10.svg',
    path: 'public/icons/advantage-flexibility.svg'
  },
  // Иконки спецификаций
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-5.svg',
    path: 'public/icons/spec-volume.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-4.svg',
    path: 'public/icons/spec-pressure.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-.svg',
    path: 'public/icons/spec-temperature.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/-3.svg',
    path: 'public/icons/spec-materials.svg'
  },
  // Иконки процесса
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/phone_in_talk.svg',
    path: 'public/icons/process-consultation.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/design_services.svg',
    path: 'public/icons/process-design.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/precision_manufacturing.svg',
    path: 'public/icons/process-production.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/certificate_quality.svg',
    path: 'public/icons/process-quality.svg'
  },
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/trumpet.svg',
    path: 'public/icons/process-installation.svg'
  },
  // Логотип
  {
    url: 'https://c.animaapp.com/mhl4okafNtEOeg/assets/logo_black.svg',
    path: 'public/icons/logo.svg'
  }
];

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const dir = path.dirname(filepath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting download of all images and icons...\n');
  
  for (const image of images) {
    try {
      await downloadFile(image.url, image.path);
    } catch (error) {
      console.error(`✗ Error downloading ${image.path}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
}

downloadAll();
