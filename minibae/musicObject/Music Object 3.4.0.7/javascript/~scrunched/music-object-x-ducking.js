/**********
     TITLE: Music Object Extension - Ducking
   VERSION: 1.3.0
    AUTHOR: Chris van Rensburg
 COPYRIGHT: 1996-2001 Beatnik, Inc. All Rights Reserved
  REQUIRES: music-object.js (3.3.0 or higher)
**********/
function MO_x5_a(_a,_b){var _c=_a._d==_b._d&&_a._e==_b._e&&_a._f==_b._f&&_a._g.length==_b._g.length;for(var _h=0;_h<_a._g.length&&_c;_h++){var _i=false;for(var _j=0;_j<_b._g.length&& !_i;_j++)_i=_i||_a._g[_h]==_b._g[_j];_c=_c&&_i;}return _c;}function MO_x5_b(){var _k=0,_l=0,_m=false;while(_l<Music.MO_x5_c.length-_k){Music.MO_x5_c[_l]=Music.MO_x5_c[_l+_k];var _n=Music.MO_x5_c[_l];if(_n._o==0&& !_n._p){_k++;}else{if(_n._p){var _q=_n._r._g;for(var _s=0;_s<_q.length;_s++){var _t=_q[_s];if(!_t.MO_x5_d){_t.MO_x5_d=true;_t.volumeScalars['[R]ducking']=_n._u.fadeValue;}else{_t.volumeScalars['[R]ducking']=Math.min(_t.volumeScalars['[R]ducking'],_n._u.fadeValue);}}}_l++;}_m=_m||(_n._p=_n._u.inProgress||_n._v>0);}Music.MO_x5_c.length-=_k;for(var _w=0;_w<Music.instances.length;_w++){
var _x=Music.instances[_w];if(_x.MO_x5_d){_x.setVolume();_x.MO_x5_d=false;}}if(!_m)Music.onFadesUpdatedHandler=null;}function mo_updateDuckingTasks(){var _y=this;for(var _z=0;_z<_y.MO_x5_e.length;_z++){var _r=_y.MO_x5_e[_z];if(_r._A!=null&& !MO_x5_a(_r,_r._A._r)){if(_y.MO_x5_f)_r._A.masterOff();_r._A._o--;_r._A=null;}if(_r._A==null){for(var _l=0;_l<Music.MO_x5_c.length;_l++){if(MO_x5_a(_r,Music.MO_x5_c[_l]._r)){_r._A=Music.MO_x5_c[_l];break;}}if(_r._A==null){_r._A=Music.MO_x5_c[Music.MO_x5_c.length]=new mo_DuckingTask(_r._d,_r._e,_r._f);var _q=Music.MO_x5_c[Music.MO_x5_c.length-1]._r._g;for(var _s=0;_s<_r._g.length;_s++)_q[_s]=_r._g[_s];}_r._A._o++;if(_y.MO_x5_f)_r._A.masterOn();}}}function mo_addDuckingSlaves(_t,_d,_e,_f){var _y=this,_B=null;if(typeof _d!='number')_d=Music.duckingAttackTime;if(typeof _e!='number')_e=Music.duckingSustainLevel;if(typeof _f!='number')_f=Music.duckingReleaseTime;_y.removeDuckingSlaves(_t);for(var _z=0;_z<_y.MO_x5_e.length;_z++){var _r=_y.MO_x5_e[_z];if(_r._d==_d&&_r._e==_e&&
_r._f==_f)_B=_r;}if(_B==null)_B=_y.MO_x5_e[_y.MO_x5_e.length]=new MO_x5_g(_d,_e,_f);var _g=(typeof _t=='undefined'||_t==null)?Music.instances:(Music.isInstance(_t)?new Array(_t):_t);for(var _s=0;_s<_g.length;_s++){if(_g[_s]!=this)_B._g[_B._g.length]=_g[_s];}_y.updateDuckingTasks();}function mo_removeDuckingSlaves(_t){var _y=this,_C=_y.MO_x5_e,_g=(typeof _t=='undefined'||_t==null)?Music.instances:(Music.isInstance(_t)?new Array(_t):_t);for(var _s=0;_s<_g.length;_s++){var _D=false;for(var _z=0;_z<_C.length&& !_D;_z++){var _E=_C[_z]._g;for(var _F=0;_F<_E.length;_F++){if(!_D&&_E[_F]==_g[_s])_D=true;if(_D&&_F<_E.length-1)_E[_F]=_E[_F+1];}if(_D)_E.length--;}if(_D&&_E.length==0){for(var _z;_z<_C.length-1;_z++)_C[_z]=_C[_z+1];_C[_C.length-1]=null;_C.length--;}}_y.updateDuckingTasks();}function mo_addDuckingMasters(_G,_d,_e,_f){Music.addDuckingRelationships(_G,this,_d,_e,_f);}function mo_removeDuckingMasters(_G){Music.removeDuckingRelationships(_G,this);}function mo_addDuckingRelationships(_G,_t,_d,_e,_f){
var _H=(typeof _G=='undefined'||_G==null)?Music.instances:(Music.isInstance(_G)?new Array(_G):_G);for(var _I=0;_I<_H.length;_I++)_H[_I].addDuckingSlaves(_t,_d,_e,_f);}function mo_removeDuckingRelationships(_G,_t){var _H=(typeof _G=='undefined'||_G==null)?Music.instances:(Music.isInstance(_G)?new Array(_G):_G);for(var _I=0;_I<_H.length;_I++)_H[_I].removeDuckingSlaves(_t);}function mo_updateDuckingOn(){var _J='master'+(this.audible?'On':'Off');for(var _z=0;_z<this.MO_x5_e.length;_z++)this.MO_x5_e[_z]._A[_J]();}function mo_getUsage(){return this.usage}function mo_setUsage(_K){this.usage=_K}function MO_x5_g(_d,_e,_f){this._d=_d;this._e=_e;this._f=_f;this._g=new Array();this._A=null;}function MO_x5_h(){this._v++;if(this._v>0){Music.onFadesUpdatedHandler=MO_x5_b;this._p=true;this._u.update(this._u.fadeValue,this._r._e,this._r._d);this._u.start();}}function MO_x5_i(){this._v--;if(this._v<1){this._u.update(this._u.fadeValue,100,this._r._f);this._u.start();}}function mo_DuckingTask(_d,_e,_f){
this._r=new MO_x5_g(_d,_e,_f);this._u=new Music.Fade();this._u.fadeValue=100;this._v=0;this._o=0;this._p=false;this.masterOn=MO_x5_h;this.masterOff=MO_x5_i;}function MO_x5_j(_y){_y.addCallbackHandler('onAudibleStateChange',_y.objectName+'.updateDuckingOn ()');_y.MO_x5_e=new Array();_y.volumeScalars['[R]ducking']=100;_y.MO_x5_d=false;_y.MO_x5_f=false;}Music.addInstanceExtender(MO_x5_j);Music.addPublicInstanceMethods('addDuckingMasters','addDuckingSlaves','getUsage','removeDuckingMasters','removeDuckingSlaves','setUsage');Music.addPrivateInstanceMethods('updateDuckingTasks','updateDuckingOn');Music.addPublicStaticMethods('addDuckingRelationships','removeDuckingRelationships');Music.MO_x5_c=new Array();Music.duckingAttackTime=200;Music.duckingSustainLevel=0;Music.duckingReleaseTime=1500;