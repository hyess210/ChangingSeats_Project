// typography

interface ITypographyTypes {
  font: {
    Nanum_Square_Light: string;
    Nanum_Square_Regular: string;
    Nanum_Square_Bold: string;
    Nanum_Square_ExtraBold: string;
  };

  size: {
    s1: string;
    s2: string;
    s3: string;
    m1: string;
    m2: string;
    m3: string;
    m4: string;
    m5: string;
    l1: string;
    l2: string;
    l3: string;
    code: string;
  };
}

export const typography: ITypographyTypes = {
  font: {
    Nanum_Square_Light: 'Nanum Square Light',
    Nanum_Square_Regular: 'Nanum Square Regular',
    Nanum_Square_Bold: 'Nanum Square Bold',
    Nanum_Square_ExtraBold: 'Nanum Square ExtraBold',
  },
  size: {
    s1: '12px', // detail contents
    s2: '14px', // content1
    s3: '16px', // content2
    m1: '18px', // title1
    m2: '20px', // title2
    m3: '22px', // title3
    m4: '24px', // title4
    m5: '28px',
    l1: '32px',
    l2: '40px',
    l3: '48px',
    code: '90px',
  },
};

export const sizeArray: number[] = [
  Number(typography.size.s1),
  Number(typography.size.s2),
  Number(typography.size.s3),
  Number(typography.size.m1),
  Number(typography.size.m2),
  Number(typography.size.m3),
  Number(typography.size.l1),
  Number(typography.size.l2),
  Number(typography.size.l3),
];
