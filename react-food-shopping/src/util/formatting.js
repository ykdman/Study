// 통화 단위 Formatting
/**
 * Intl.NumberFormat
 * locale : 'en-US' = 미국, 'ko-KR' = 한국 화폐설정시 사용
 * { style : 'currency' , currency : 'USD'} = 미국 화페단위로 설정
 * { style : 'currency' , currency : 'KRW'} = 한국 화폐단위로 설정
 */
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
