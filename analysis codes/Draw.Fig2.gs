*
'reinit'
'set display color white'
'c'

'set map 1 1 1'

*'set mproj nps'
'set font 0'
'run /home/libs/file_gs/rgbset.gs'


* RGB for blue
'set rgb 301 255 247 251'
'set rgb 302 236 231 242'
'set rgb 303 208 209 230'
'set rgb 304 166 189 219'
'set rgb 305 116 169 207'
'set rgb 306 54 144 192'
'set rgb 307 5 112 176'
'set rgb 308 4 90 141'
'set rgb 309 2 56 88'


* RGB for red
'set rgb 501 255 255 204'
'set rgb 502 255 237 160'
'set rgb 503 254 217 118'
'set rgb 504 254 178 76'
'set rgb 505 253 141 60'
'set rgb 506 252 78 42'
'set rgb 507 227 26 28'
'set rgb 508 189 0 38'
'set rgb 509 128 0 38'

clevs1='  0.2   0.25 0.3 0.35 0.4 0.45 0.5 0.55 0.6'
ccols1=' 0   501    502 503 504 505 506 507 508 509'

clevs2='-0.8 -0.7 -0.6 -0.5 -0.4 -0.3 -0.2 -0.1   0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8'
ccols2=' 308  307  306  305  304  303  302  301  0 501 502 503 504 505 506 507 508'

*
xmin=0.5
ymin=10.5

xlen=3.5
ylen=-2.5

xgap=0.5
ygap=0.5

jc=0
kk=0
while(jc < 2)
jc=jc+1
ic=0
while(ic < 2)
kk=kk+1
ic=ic+1

*xpos=xmin+(ic-1)*(xlen+xgap)
*xpos1=xpos+xlen
*ypos=ymin+(jc-1)*(ylen-ygap)
*ypos1=ypos+ylen

if(kk=1)
'open ../../21.hadley/06.omega.lat.averaged.for.walker.on-off.ctl'
'open ../../21.hadley/06.divu.lat.averaged.for.walker.on-off.test.ctl'
'open ../../21.hadley/06.omega.lat.averaged.for.walker.on-off.test.ctl'

'set parea 0.5 5 7 10.3'

*'set map 1 1 4'
'set grads off'

'set ylab on'
'set grid on'
'set zlog on'

'set xlopts 1 2 0.10'
'set ylopts 1 2 0.10'

'set lon 100 280'

'set xlint 20'
'set ylint 200'

'set gxout shaded'
'set clevs 'clevs2
'set ccols 'ccols2
'd omega.1*100'

'set gxout contour'
'set cthick 10'
'set clab off'
'set clevs 'clevs2
'set ccols 'ccols2
'd omega.1*100'

'set gxout vector'
'set arrlab off'
'set ccolor 15'
'd skip(divu.2,1,1);omega.3*(-100)'

'close 3'
'close 2'
'close 1'
endif

if(kk=2)
'open ../../21.hadley/05.omega.lon.averaged.for.wnp.on-off.ctl'
'open ../../21.hadley/05.divv.lon.averaged.for.wnp.on-off.test.ctl'
'open ../../21.hadley/05.omega.lon.averaged.for.wnp.on-off.test.ctl'

'set parea 5.7 8 7 10.3'

*'set map 1 1 4'
'set grads off'

'set ylab on'
'set grid on'
'set zlog on'

'set xlopts 1 2 0.10'
'set ylopts 1 2 0.10'

'set lat 0 45'

'set xlint 10'
'set ylint 200'

'set gxout shaded'
'set clevs 'clevs2
'set ccols 'ccols2
'd omega.1*100'

'set gxout contour'
'set cthick 10'
'set clab off'
'set clevs 'clevs2
'set ccols 'ccols2
'd omega.1*100'

'set gxout vector'
'set arrlab off'
'set ccolor 15'
'd skip(divv.2,1,1);omega.3*(-100)'

'close 3'
'close 2'
'close 1'

'run /home/libs/file_gs/xcbar.gs 1.5 7.0 6.45 6.57 -fw 0.075 -fh 0.075 -line on -edge box'

endif


if(kk=3)
*'open ../../06.ext.mon/chlon.2xco2/sst.100yr.chlon.2xco2.ens.mjaso.ctl'
*'open ../../06.ext.mon/chlclim.2xco2/sst.100yr.chlclim.2xco2.ens.mjaso.ctl'
*'open ../02.sst.chlon.2xco2.eliminated.lon.mn.ctl'
*'open ../02.sst.chlclim.2xco2.eliminated.lon.mn.ctl'
*'open ../03.sst.30yr.chlon.2xco2.ens.anom.mjaso.ctl'
*'open ../03.sst.30yr.chlclim.2xco2.ens.anom.mjaso.ctl'
'open ../01.diff.sst.chlon.2xco2-chlclim.2xco2.ctl'
'open ../01.diff.sst.chlon.2xco2-chlclim.2xco2.test.ctl'

'set parea 0.5 8 3 6.0'

*'set map 1 1 4'
'set grads off'

'set xlab on'
'set ylab on'
'set grid on'

'set xlopts 1 2 0.10'
'set ylopts 1 2 0.10'

'set lon 100 280'
'set lat -30 30'

'set xlint 20'
'set ylint 10'

'set gxout shaded'
'set clevs 'clevs1
'set ccols 'ccols1
'd mn.1'

'run /home/libs/file_gs/hatch.gs test.2 -999 -2.00172 -angle 45,135 -thickness 5 -color 150'
'run /home/libs/file_gs/hatch.gs test.2 2.00172 999 -angle 45,135 -thickness 5 -color 150'

'close 2'
'close 1'

'run /home/libs/file_gs/xcbar.gs 1.5 7.0 2.5 2.62 -fw 0.075 -fh 0.075 -line on -edge box'

endif


'set strsiz 0.12'
'set string 1 tl 5 0'
if(kk=1); 'draw string 0.5 10.5 (a) `3w`0 & div. U'; endif 
if(kk=2); 'draw string 5.7 10.5 (b) `3w`0 & div. V'; endif 
if(kk=2); 'draw string 0.5 6.2 (c) SST'; endif

endwhile
endwhile

'gxprint Fig2.eps eps'
