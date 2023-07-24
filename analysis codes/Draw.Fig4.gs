*
'reinit'
'set display color white'
'c'

'set map 1 1 1'

*'set mproj nps'
'set font 0'
'run /home/libs/file_gs/rgbset.gs'

*
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

clevs1='-1.6 -1.4 -1.2 -1.0 -0.8 -0.6 -0.4 -0.2   0.2 0.4 0.6 0.8 1.0 1.2 1.4 1.6'
ccols1=' 308  307  306  305  304  303  302  301  0 501 502 503 504 505 506 507 508'

clevs2='-0.8 -0.7 -0.6 -0.5 -0.4 -0.3 -0.2 -0.1   0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8'
ccols2=' 308  307  306  305  304  303  302  301  0 501 502 503 504 505 506 507 508'


xmin=0.5
ymin=10.5

xlen=3.5
ylen=-2.5

xgap=0.5
ygap=0.5

jc=0
kk=0
while(jc < 1)
jc=jc+1
ic=0
while(ic < 2)
kk=kk+1
ic=ic+1

xpos=xmin+(ic-1)*(xlen+xgap)
xpos1=xpos+xlen
ypos=ymin+(jc-1)*(ylen-ygap)
ypos1=ypos+ylen

if(kk=1)
'open ../test/01.comp.diff.dens.on-off.ctl'
'open ../test/01.comp.diff.dens.on-off.test.ctl'

'set parea 'xpos' 'xpos1' 'ypos1' 'ypos

*'set map 1 1 4'
'set grads off'

'set xlab on'
'set ylab on'
'set grid on'

'set xlopts 1 2 0.10'
'set ylopts 1 2 0.10'

'set lon 100 180'
'set lat 0 50'

'set xlint 20'
'set ylint 10'

'set gxout grfill'
'set clevs 'clevs2
'set ccols 'ccols2
'd dens.1'

'run /home/libs/file_gs/hatch.gs test.2 -999 -2.07387 -angle 45,135 -thickness 5 -color 150'
'run /home/libs/file_gs/hatch.gs test.2  2.07387 999 -angle 45,135 -thickness 5 -color 150'

'close 2'
'close 1'
endif

if(kk=2)
'open ../test/02.comp.diff.track.dens.on-off.ctl'
'open ../test/02.comp.diff.track.dens.on-off.test.ctl'

'set parea 'xpos' 'xpos1' 'ypos1' 'ypos

*'set map 1 1 4'
'set grads off'

'set xlab on'
'set ylab on'
'set grid on'

'set xlopts 1 2 0.10'
'set ylopts 1 2 0.10'

'set lon 100 180'
'set lat 0 50'

'set xlint 20'
'set ylint 10'

'set gxout grfill'
'set clevs 'clevs2
'set ccols 'ccols2
'd dens.1'

* 95
'run /home/libs/file_gs/hatch.gs test.2 -999 -2.07387 -angle 45,135 -thickness 5 -color 150'
'run /home/libs/file_gs/hatch.gs test.2  2.07387 999 -angle 45,135 -thickness 5 -color 150'

'close 2'
'close 1'
endif

'run /home/libs/file_gs/xcbar.gs 1.5 7.0 7.5 7.62 -fw 0.075 -fh 0.075 -line on -edge box -fthickness 1'

'set strsiz 0.10'
'set string 1 tl 5 0'
if(kk=1); 'draw string 'xpos+0.1' 'ypos+0.2' (a) Genesis density'; endif
if(kk=2); 'draw string 'xpos+0.1' 'ypos+0.2' (b) Track density'; endif 

endwhile
endwhile


'gxprint Fig4.eps eps'
