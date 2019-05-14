export default {
  color: {
    white: '#FFFFFF',
    gray: '#C4C4C4',
    black: '#000000',
    orange1: '#FFAF6E',
    orange2: '#F98D43',
    orange3: '#F37021',
    orange4: '#D85700',
    orange5: '#E85E00',
    blue1: '#EBFBFF',
    blue2: '#88FFFC',
    blue3: '#055399',
    blue4: '#114060',
    blue5: '#1B75BC',
    blue6: '#33B6FF',
    red: '#FF0000',
  },
  easingFn: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
  baseNum: 8,
  layout() {
    return {
      margin1: this.baseNum * 16,
      margin2: this.baseNum * 8,
      margin3: this.baseNum * 4,
      margin4: this.baseNum * 2,
      margin5: this.baseNum,
      padding1: this.baseNum * 8,
      padding2: this.baseNum * 4,
      padding3: this.baseNum * 3,
      padding4: this.baseNum * 2,
      padding5: this.baseNum,
    };
  },
  border() {
    return {
      radius1: this.baseNum * 4,
      radius2: this.baseNum * 2,
      radius3: this.baseNum,
    };
  },
  ellipsis: `
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  `,
  dropShadow: {
    normal: '0px 3px 8px rgba(0, 0, 0, 0.15)',
    repressed: '0px 8px 12px rgba(0, 0, 0, 0.15)',
  },
  device: {
    mobile: 'only screen and (max-width: 1199px)',
    tablet: 'only screen and (min-width: 768px) and (max-width: 1199px)',
    desktop: 'only screen and (min-width: 1200px)',
  },
  br: `br {
    content: "";
    display: block;
    margin: 0.75em 0;
  }`,
};
