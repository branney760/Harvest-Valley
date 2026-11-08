/* Teaching model v1.0. Dimensionless relative carbon-flux rates; not calibrated to grapes. */
(function(root){
function vineyardModel(light,temp,water){
  if(!Number.isFinite(light)||light<0||light>100||!Number.isFinite(temp)||temp<10||temp>45||!Number.isFinite(water)||water<20||water>100)throw new RangeError('Inputs outside model bounds');
  const lightFactor=light/(light+25);
  const tempFactor=Math.exp(-Math.pow((temp-25)/16,2));
  const stomata=Math.min(1,Math.max(.08,(water-15)/65));
  const gross=125*lightFactor*tempFactor*stomata;
  const respiration=6*Math.pow(2,(temp-25)/10);
  return {gross,respiration,net:gross-respiration,stomata};
}
if(typeof module!=='undefined')module.exports=vineyardModel;
else root.vineyardModel=vineyardModel;
})(typeof window==='undefined'?globalThis:window);
