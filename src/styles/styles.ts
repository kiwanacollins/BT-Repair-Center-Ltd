import { CSSClasses } from '../data/types'

const colorDark = '#222'
const colorDark2 = '#666'
const colorGray = '#e3e3e3'
const colorWhite = '#fff'
const colorRed = '#f03434'
const colorBlue = '#3674B5'  // Updated to match the SCSS variable

const styles: CSSClasses = {
  dark: {
    color: colorDark,
  },

  white: {
    color: colorWhite,
  },

  red: {
    color: colorRed,
  },

  blue: {
    color: colorBlue,
  },

  'bg-blue': {
    backgroundColor: colorBlue,  // Updated to use the colorBlue variable
  },

  'bg-dark': {
    backgroundColor: colorDark2,
  },

  'bg-gray': {
    backgroundColor: colorGray,
  },

  'bg-red': {
    backgroundColor: colorRed,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  'w-auto': {
    flex: 1,
    paddingRight: '8px',
  },

  'ml-30': {
    flex: 1,
  },

  'w-100': {
    width: '100%',
  },

  'w-50': {
    width: '50%',
  },

  'w-55': {
    width: '55%',
  },

  'w-45': {
    width: '45%',
  },

  'w-60': {
    width: '60%',
  },

  'w-40': {
    width: '40%',
  },

  'w-48': {
    width: '48%',
  },

  'w-17': {
    width: '17%',
  },

  'w-18': {
    width: '18%',
  },

  row: {
    borderBottom: `1px solid ${colorGray}`,
  },

  'mt-40': {
    marginTop: '16px',
  },

  'mt-30': {
    marginTop: '12px',
  },

  'mt-20': {
    marginTop: '8px',
  },

  'mt-10': {
    marginTop: '5px',
  },

  'mb-5': {
    marginBottom: '3px',
  },

  'p-4-8': {
    padding: '2px 6px',
  },

  'p-5': {
    padding: '3px',
  },

  'pb-10': {
    paddingBottom: '5px',
  },

  right: {
    textAlign: 'right',
  },

  bold: {
    fontWeight: 'bold',
  },

  'fs-20': {
    fontSize: '12px',
  },

  'fs-45': {
    fontSize: '20px',
  },

  'fs-16': {
    fontSize: '10px',
  },

  'fs-12': {
    fontSize: '8px',
  },

  page: {
    fontFamily: 'Nunito',
    fontSize: '9px',
    color: '#555',
    padding: '20px 25px',
  },

  'mb-10': {
    marginBottom: '5px',
  },

  center: {
    textAlign: 'center',
  },

  italic: {
    fontStyle: 'italic',
  },

  'border-top': {
    borderTop: '1px solid #000',
    marginBottom: '4px',
  },

  'border-box': {
    border: '2px solid #333',
    borderRadius: '3px',
    padding: '6px',
  },

  'height-60': {
    height: '40px',
  },

  'max-width-300': {
    maxWidth: '200px',
  },

  'flex-1': {
    flex: 1,
  },

  span: {
    padding: '4px 12px 4px 0',
  },

  logo: {
    display: 'block',
  },
}

export default styles
