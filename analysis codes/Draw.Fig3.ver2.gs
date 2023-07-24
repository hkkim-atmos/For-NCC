*
'reinit'
'set display color white'
'c'

'set grads off'
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

clevs1='-80   -70   -60   -50   -40   -30   -20  -10           10  20 30 40 50 60 70 80'
ccols1='   308   307   306   305   304   303   302  301  0 501 502 503 504 505 506 507 508'

clevs2='-1.6 -1.4 -1.2 -1.0 -0.8 -0.6 -0.4 -0.2   0.2 0.4 0.6 0.8 1.0 1.2 1.4 1.6'
ccols2=' 308  307  306  305  304  303  302  301  0 501 502 503 504 505 506 507 508'

clevs3='-1.6 -1.4 -1.2 -1.0 -0.8 -0.6 -0.4 -0.2   0.2 0.4 0.6 0.8 1.0 1.2 1.4 1.6'
ccols3=' 308  307  306  305  304  303  302  301  0 501 502 503 504 505 506 507 508'

clevs4='-40 -35 -30 -25 -20 -15 -10 -5   5 10 15 20 25 30 35 40'
ccols4=' 308  307  306  305  304  303  302  301  0 501 502 503 504 505 506 507 508'

xmin=0.5
ymin=10.5

xlen=3.5
ylen=-2.5

xgap=0.5
ygap=1.0

jc=0
kk=0
while(jc < 2)
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
'open ../chlon.2xco2/01.chl.chlon.2xco2.ctl'
'open ../chlon/01.chl.chlon.ctl'

'set parea 'xpos' 'xpos1' 'ypos1' 'ypos

'set xlopts 1 1 0.10'
'set ylopts 1 1 0.10'
'set ylevs 10 30 50 70 90 110'

'set lon 100 280'
'set lat 0'
'set yflip off'
'set z 11 23'

* ug/kg -> g/kg
'set gxout shaded'
'set clevs 'clevs1
'set ccols 'ccols1
'd mean(chl.1, lat=-2.5, lat=2.5)*1000 - mean(chl.2, lat=-2.5, lat=2.5)*1000'

'set gxout contour'
'set cthick 5'
'set clab on'
'set clevs 0'
'set ccolor 1'
'd mean(chl.1, lat=-2.5, lat=2.5)*1000 - mean(chl.2, lat=-2.5, lat=2.5)*1000'

'run /home/libs/file_gs/xcbar.gs 0.5 4.0 7.5 7.62 -fw 0.08 -fh 0.08 -line on -edge box -fskip 3'

'set strsiz 0.10'
'set string 1 tl 5 0'
'draw string 'xpos+0.0' 'ypos+0.2' (a) Chlorophyll'
*'set strsiz 0.08'
*'draw string 'xpos+1.55' 'ypos1-0.7' [g/Kg]'

'close 2'
'close 1'

endif

if(kk=2)
'open ../chlon.2xco2/01.sw_heat.chlon.2xco2.ctl'
'open ../chlclim.2xco2/01.sw_heat.chlclim.2xco2.ctl'

'set parea 'xpos' 'xpos1' 'ypos1' 'ypos

'set xlopts 1 1 0.10'
'set ylopts 1 1 0.10'

'set lon 100 280'
'set lat 0'
'set yflip off'
'set z 11 23'

'set gxout shaded'
'set clevs 'clevs2
'set ccols 'ccols2
'd mean(sw_heat.1, lat=-2.5, lat=2.5) - mean(sw_heat.2, lat=-2.5, lat=2.5)'

'set gxout contour'
'set cthick 5'
'set clab off'
'set ccolor 1'
'set clevs 0'
'd mean(sw_heat.1, lat=-2.5, lat=2.5) - mean(sw_heat.2, lat=-2.5, lat=2.5)'

'run /home/libs/file_gs/xcbar.gs 4.5 8.0 7.5 7.62 -fw 0.08 -fh 0.08 -line on -edge box -fskip 3'

'set strsiz 0.10'
'set string 1 tl 5 0'
'draw string 'xpos+0.0' 'ypos+0.2' (b) Shortwave heating'
*'set strsiz 0.08'
*'draw string 'xpos+1.55' 'ypos1-0.7' [W/m`a2`n]'

'close 2'
'close 1'

endif

if(kk=3)
'open ../chlon.2xco2/01.wt.chlon.2xco2.ctl'
'open ../chlclim.2xco2/01.wt.chlclim.2xco2.ctl'

'set parea 'xpos' 'xpos1' 'ypos1' 'ypos

'set xlopts 1 1 0.10'
'set ylopts 1 1 0.10'

'set lon 100 280'
'set lat 0'
'set yflip off'
'set z 11 23'

'set gxout shaded'
'set clevs 'clevs4
'set ccols 'ccols4
'd mean(wt.1, lat=-2.5, lat=2.5)*10e2*10e4 - mean(wt.2, lat=-2.5, lat=2.5)*10e2*10e4'

'set gxout contour'
'set cthick 5'
'set clab off'
'set ccolor 1'
'set clevs 0'
'd mean(wt.1, lat=-2.5, lat=2.5)*10e2*10e4 - mean(wt.2, lat=-2.5, lat=2.5)*10e2*10e4'

'run /home/libs/file_gs/xcbar.gs 0.5 4.0 4.0 4.12 -fw 0.08 -fh 0.08 -line on -edge box -fskip 3'

'set strsiz 0.10'
'set string 1 tl 5 0'
'draw string 'xpos+0.0' 'ypos+0.2' (c) Vetrical velocity'
*'set strsiz 0.08'
*'draw string 'xpos+1.35' 'ypos1-0.7' [cm/s, 10`a-4`n]'

'close 2'
'close 1'

endif


if(kk=4)
'open /home/hkkim/2021/cm2.1/00.data/52.budget.v2/mixed.layer.budget.wp.ctl'
'open /home/hkkim/2021/cm2.1/00.data/52.budget.v2/mixed.layer.budget.ep.ctl'

'set parea 'xpos' 'xpos1' 'ypos1' 'ypos

'set xlopts 1 1 0.10'
'set ylopts 1 1 0.08'

'set vrange -0.05 0.05'
'set ylevs -0.05 -0.04 -0.03 -0.02 -0.01 0 0.01 0.02 0.03 0.04 0.05'
'set vrange2 0 7'
'set xaxis 0 7 1'
'set xlabs | tendency | Z-adv | M-adv | V-adv | Qnet | Res. |'

'set gxout bar'

'set t 0.125 7.125'
'set ccolor 508'
'set bargap 75'
'set barbase 0'
'd wp.1'

'set t -0.125 6.875'
'set ccolor 308'
'set bargap 75'
'set barbase 0'
'd ep.2'

'set strsiz 0.10'
'set string 1 tl 5 0'
'draw string 'xpos+0.0' 'ypos+0.2' (d) Mixed layer heat budget'
*'set strsiz 0.08'
*'draw string 'xpos+0.1' 'ypos1+0.2' [K/month]'

'set line 1 1 1'
'draw rec 'xpos+2.50' 'ypos1+0.00' 'xpos+3.50' 'ypos1+0.50''

'set line 508 1 1'
'draw recf 'xpos+2.60' 'ypos1+0.30' 'xpos+2.90' 'ypos1+0.40''
'set string 508 c 5 0'
'set strsiz 0.1'
'draw string 'xpos+3.25' 'ypos1+0.35' TWP'

'set line 308 1 1'
'draw recf 'xpos+2.60' 'ypos1+0.10' 'xpos+2.90' 'ypos1+0.20''
'set string 308 c 5 0'
'set strsiz 0.10'
'draw string 'xpos+3.25' 'ypos1+0.15' TEP'

'close 2'
'close 1'


endif

endwhile
endwhile


'gxprint Fig3.ver2.eps eps'
