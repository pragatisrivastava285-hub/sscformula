import { useState } from "react";

const DATA = [
  {
    id:"percentage", name:"Percentage", icon:"📊", color:"#f97316",
    formulas:[
      { name:"Basic Percentage", tag:"Most Asked",
        formula:"Percentage = (Value ÷ Total) × 100",
        vars:[{k:"Value",d:"The part you want to find % of"},{k:"Total",d:"The complete/whole amount"}],
        examples:[{q:"Out of 500 marks, a student scored 375. What is the percentage?",steps:["= (375 ÷ 500) × 100","= 0.75 × 100"],ans:"75%"}]},
      { name:"Percentage Increase", tag:"Important",
        formula:"Increase% = [(New − Old) ÷ Old] × 100",
        vars:[{k:"New",d:"Increased/new value"},{k:"Old",d:"Original value"}],
        examples:[{q:"Price of rice rose from ₹40 to ₹50. Find % increase.",steps:["Increase = 50 − 40 = 10","= (10 ÷ 40) × 100"],ans:"25%"}]},
      { name:"Percentage Decrease", tag:"Important",
        formula:"Decrease% = [(Old − New) ÷ Old] × 100",
        vars:[{k:"Old",d:"Original (larger) value"},{k:"New",d:"Reduced value"}],
        examples:[{q:"Salary dropped from ₹8000 to ₹6000. Find % decrease.",steps:["Decrease = 8000 − 6000 = 2000","= (2000 ÷ 8000) × 100"],ans:"25%"}]},
      { name:"% → Fraction Shortcut", tag:"Trick",
        formula:"10%=1/10 | 20%=1/5 | 25%=1/4\n33.3%=1/3 | 50%=1/2 | 75%=3/4",
        vars:[],
        examples:[{q:"Find 25% of 240.",steps:["25% = 1/4","(1/4) × 240 = 60"],ans:"60"}]},
    ]
  },
  {
    id:"profit", name:"Profit & Loss", icon:"💰", color:"#10b981",
    formulas:[
      { name:"Profit & Loss Basics", tag:"Foundation",
        formula:"Profit = SP − CP\nLoss = CP − SP\nProfit% = (Profit ÷ CP) × 100\nLoss%   = (Loss ÷ CP) × 100",
        vars:[{k:"SP",d:"Selling Price — price at which item is sold"},{k:"CP",d:"Cost Price — price at which item was bought"}],
        examples:[{q:"CP = ₹20, SP = ₹25. Find Profit%.",steps:["Profit = 25 − 20 = ₹5","Profit% = (5 ÷ 20) × 100"],ans:"25%"}]},
      { name:"Finding Selling Price", tag:"Most Asked",
        formula:"SP = CP × (100 + Profit%) ÷ 100\nSP = CP × (100 − Loss%)   ÷ 100",
        vars:[{k:"SP",d:"Selling Price (to find)"},{k:"CP",d:"Cost Price (given)"}],
        examples:[{q:"CP = ₹500, Profit = 20%. Find SP.",steps:["SP = 500 × (100+20) ÷ 100","= 500 × 1.2"],ans:"SP = ₹600"}]},
      { name:"Finding Cost Price", tag:"Important",
        formula:"CP = SP × 100 ÷ (100 + Profit%)\nCP = SP × 100 ÷ (100 − Loss%)",
        vars:[{k:"CP",d:"Cost Price (to find)"},{k:"SP",d:"Selling Price (given)"}],
        examples:[{q:"SP = ₹600, Profit = 20%. Find CP.",steps:["CP = 600 × 100 ÷ 120","= 60000 ÷ 120"],ans:"CP = ₹500"}]},
      { name:"Discount Formula", tag:"Important",
        formula:"Discount = MP − SP\nDiscount% = (Discount ÷ MP) × 100\nSP = MP × (100 − Discount%) ÷ 100",
        vars:[{k:"MP",d:"Marked Price (printed on tag)"},{k:"SP",d:"Selling Price (after discount)"}],
        examples:[{q:"MP = ₹800, Discount = 10%. Find SP.",steps:["SP = 800 × (100−10) ÷ 100","= 800 × 0.9"],ans:"SP = ₹720"}]},
    ]
  },
  {
    id:"interest", name:"Simple & Compound Interest", icon:"🏦", color:"#3b82f6",
    formulas:[
      { name:"Simple Interest (SI)", tag:"Foundation",
        formula:"SI = (P × R × T) ÷ 100\nAmount = P + SI",
        vars:[{k:"P",d:"Principal — the initial money"},{k:"R",d:"Rate of interest per year (%)"},{k:"T",d:"Time in years"}],
        examples:[{q:"P = ₹5000, R = 8%, T = 3 years. Find SI.",steps:["SI = (5000 × 8 × 3) ÷ 100","= 120000 ÷ 100"],ans:"SI = ₹1200"}]},
      { name:"Compound Interest (CI)", tag:"Most Asked",
        formula:"Amount = P × (1 + R÷100)ⁿ\nCI = Amount − P",
        vars:[{k:"P",d:"Principal"},{k:"R",d:"Annual Rate %"},{k:"n",d:"Number of years"}],
        examples:[{q:"P = ₹1000, R = 10%, 2 years. Find CI.",steps:["A = 1000 × (1.1)² = 1000 × 1.21 = 1210","CI = 1210 − 1000"],ans:"CI = ₹210"}]},
      { name:"CI − SI Trick (2 Years)", tag:"Shortcut",
        formula:"CI − SI = P × (R ÷ 100)²",
        vars:[{k:"P",d:"Principal"},{k:"R",d:"Rate %"}],
        examples:[{q:"P = ₹10000, R = 10%, 2 years. Find CI − SI.",steps:["= 10000 × (10÷100)²","= 10000 × 0.01"],ans:"₹100"}]},
      { name:"Half-Yearly / Quarterly CI", tag:"Important",
        formula:"Half-yearly: A = P×(1 + R÷200)²ⁿ\nQuarterly:   A = P×(1 + R÷400)⁴ⁿ",
        vars:[{k:"P",d:"Principal"},{k:"R",d:"Annual Rate %"},{k:"n",d:"Number of years"}],
        examples:[{q:"P = ₹10000, R = 20%, 1 yr half-yearly.",steps:["A = 10000×(1+20÷200)²","= 10000×(1.1)² = 10000×1.21"],ans:"A = ₹12100"}]},
    ]
  },
  {
    id:"ratio", name:"Ratio & Proportion", icon:"⚖️", color:"#8b5cf6",
    formulas:[
      { name:"Ratio Basics", tag:"Foundation",
        formula:"Ratio a:b = a÷b\nIf a:b = m:n  →  a = mk, b = nk",
        vars:[{k:"a,b",d:"Two quantities being compared"},{k:"k",d:"Common multiplier"}],
        examples:[{q:"Divide ₹1200 in ratio 3:5.",steps:["Total parts = 3+5 = 8","Share 1 = (3÷8)×1200 = 450","Share 2 = (5÷8)×1200 = 750"],ans:"₹450 and ₹750"}]},
      { name:"Proportion", tag:"Important",
        formula:"a:b = c:d  →  a×d = b×c\n(Cross Multiply)\nFourth Proportional d = (b×c) ÷ a",
        vars:[{k:"a,b,c,d",d:"Four proportional quantities"}],
        examples:[{q:"3:4 = 6:x. Find x.",steps:["3×x = 4×6","3x = 24"],ans:"x = 8"}]},
      { name:"Mixture & Alligation", tag:"Trick",
        formula:"Cheaper Qty : Dearer Qty\n= (Dearer − Mean) : (Mean − Cheaper)",
        vars:[{k:"Mean",d:"Required/average price"},{k:"Cheaper",d:"Price of cheaper item"},{k:"Dearer",d:"Price of costlier item"}],
        examples:[{q:"Mix milk at ₹10 & ₹15 to get ₹12/litre. Find ratio.",steps:["= (15−12) : (12−10)","= 3 : 2"],ans:"3 : 2"}]},
    ]
  },
  {
    id:"timework", name:"Time & Work", icon:"⏱️", color:"#ec4899",
    formulas:[
      { name:"Basic Time & Work", tag:"Foundation",
        formula:"A's 1-day work = 1÷n\nTogether in = 1 ÷ (1/a + 1/b) days",
        vars:[{k:"n",d:"Days A takes to finish work alone"}],
        examples:[{q:"A takes 10 days, B takes 15 days. Together?",steps:["Together/day = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6"],ans:"6 days"}]},
      { name:"Work & Wages", tag:"Important",
        formula:"Wages ∝ Work done\nDistribute wages in ratio of work",
        vars:[],
        examples:[{q:"A & B work in ratio 3:2. Total wage = ₹500. A's share?",steps:["A's wage = (3÷5) × 500"],ans:"₹300"}]},
      { name:"Pipes & Cistern", tag:"Important",
        formula:"Inlet fills: +1/n per hour\nOutlet empties: −1/m per hour\nNet fill/hour = 1/n − 1/m",
        vars:[{k:"n",d:"Hours for inlet to fill"},{k:"m",d:"Hours for outlet to empty"}],
        examples:[{q:"Pipe A fills in 6 hrs, B empties in 12 hrs. Both open — time to fill?",steps:["Net = 1/6 − 1/12 = 2/12 − 1/12 = 1/12"],ans:"12 hours"}]},
    ]
  },
  {
    id:"speed", name:"Speed, Distance & Time", icon:"🚗", color:"#f59e0b",
    formulas:[
      { name:"Basic SDT Formula", tag:"Foundation",
        formula:"Speed    = Distance ÷ Time\nDistance = Speed × Time\nTime     = Distance ÷ Speed",
        vars:[{k:"S",d:"Speed (km/hr or m/s)"},{k:"D",d:"Distance (km or m)"},{k:"T",d:"Time (hours or seconds)"}],
        examples:[{q:"Car travels 240 km in 4 hours. Find speed.",steps:["Speed = 240 ÷ 4"],ans:"60 km/hr"}]},
      { name:"Unit Conversion", tag:"Trick",
        formula:"km/hr → m/s  :  × 5/18\nm/s → km/hr  :  × 18/5",
        vars:[],
        examples:[{q:"Convert 72 km/hr to m/s.",steps:["= 72 × 5/18 = 360/18"],ans:"20 m/s"}]},
      { name:"Average Speed", tag:"Most Asked",
        formula:"Same distance both ways:\nAvg Speed = 2×S1×S2 ÷ (S1+S2)",
        vars:[{k:"S1",d:"Speed going"},{k:"S2",d:"Speed returning"}],
        examples:[{q:"Goes at 40 km/hr, returns at 60 km/hr. Avg speed?",steps:["= 2×40×60 ÷ (40+60)","= 4800 ÷ 100"],ans:"48 km/hr"}]},
      { name:"Train Crossing", tag:"Important",
        formula:"Opposite directions:\nTime = (L1+L2) ÷ (S1+S2)\nSame direction:\nTime = (L1+L2) ÷ (S1−S2)",
        vars:[{k:"L1,L2",d:"Lengths of the two trains"},{k:"S1,S2",d:"Speeds of the two trains (m/s)"}],
        examples:[{q:"Trains 100m & 150m, speeds 60 & 40 km/hr, opposite dir. Time?",steps:["Rel. speed = 100 km/hr = 250/9 m/s","Time = (100+150) ÷ (250/9) = 250×9÷250"],ans:"9 seconds"}]},
    ]
  },
  {
    id:"algebra", name:"Algebra", icon:"🔣", color:"#14b8a6",
    formulas:[
      { name:"Key Algebraic Identities", tag:"Foundation",
        formula:"(a+b)² = a²+2ab+b²\n(a−b)² = a²−2ab+b²\na²−b² = (a+b)(a−b)\n(a+b)³ = a³+3a²b+3ab²+b³\n(a−b)³ = a³−3a²b+3ab²−b³",
        vars:[{k:"a,b",d:"Any two algebraic terms or numbers"}],
        examples:[{q:"Find (103)² using identity.",steps:["= (100+3)²","= 100²+2×100×3+3²","= 10000+600+9"],ans:"10609"}]},
      { name:"a³+b³ / a³−b³", tag:"Important",
        formula:"a³+b³ = (a+b)(a²−ab+b²)\na³−b³ = (a−b)(a²+ab+b²)",
        vars:[],
        examples:[{q:"If a+b=5, ab=6. Find a³+b³.",steps:["a²+b²=(a+b)²−2ab=25−12=13","a³+b³=(a+b)[(a²+b²)−ab]=5×(13−6)"],ans:"35"}]},
      { name:"x + 1/x Shortcut", tag:"SSC Favourite",
        formula:"x²+1/x² = (x+1/x)² − 2\nx³+1/x³ = (x+1/x)³ − 3(x+1/x)\nx⁴+1/x⁴ = (x²+1/x²)² − 2",
        vars:[{k:"k",d:"Given value of x+1/x"}],
        examples:[{q:"x+1/x = 3. Find x²+1/x².",steps:["= (x+1/x)² − 2","= 3² − 2 = 9 − 2"],ans:"7"}]},
    ]
  },
  {
    id:"geometry", name:"Geometry", icon:"📐", color:"#6366f1",
    formulas:[
      { name:"Triangle — Area", tag:"Foundation",
        formula:"Area = ½ × Base × Height\nEquilateral: Area = (√3÷4) × a²\nHeron's: s=(a+b+c)÷2\n  Area = √[s(s-a)(s-b)(s-c)]",
        vars:[{k:"a,b,c",d:"Sides of triangle"},{k:"h",d:"Height/altitude"},{k:"s",d:"Semi-perimeter"}],
        examples:[{q:"Equilateral triangle, side = 6 cm. Find area.",steps:["Area = (√3÷4) × 6²","= (√3÷4) × 36 = 9√3"],ans:"9√3 cm²"}]},
      { name:"Circle Formulas", tag:"Most Asked",
        formula:"Area          = πr²\nCircumference = 2πr\nSector Area   = (θ÷360°) × πr²\nArc Length    = (θ÷360°) × 2πr",
        vars:[{k:"r",d:"Radius"},{k:"θ",d:"Central angle in degrees"},{k:"π",d:"22/7 or 3.14"}],
        examples:[{q:"r = 7 cm. Find area. (π=22/7)",steps:["Area = (22/7) × 7 × 7","= 22 × 7"],ans:"154 cm²"}]},
      { name:"Pythagoras Theorem", tag:"Foundation",
        formula:"c² = a² + b²\nHypotenuse = √(a²+b²)\nCommon triples:\n(3,4,5)  (5,12,13)  (8,15,17)",
        vars:[{k:"c",d:"Hypotenuse — side opposite 90°"},{k:"a,b",d:"The other two sides"}],
        examples:[{q:"Base = 8, Height = 6. Find hypotenuse.",steps:["c² = 8²+6² = 64+36 = 100","c = √100"],ans:"10 cm"}]},
      { name:"Quadrilaterals", tag:"Important",
        formula:"Square:      Area=a²,     P=4a\nRectangle:   Area=l×b,    P=2(l+b)\nRhombus:     Area=½×d1×d2\nTrapezium:   Area=½×(a+b)×h\nParallelogram: Area=b×h",
        vars:[{k:"a",d:"Side of square"},{k:"l,b",d:"Length & breadth"},{k:"d1,d2",d:"Diagonals of rhombus"}],
        examples:[{q:"Rhombus diagonals = 10 cm and 8 cm. Find area.",steps:["Area = ½ × 10 × 8","= ½ × 80"],ans:"40 cm²"}]},
    ]
  },
  {
    id:"mensuration", name:"Mensuration (3D)", icon:"🧊", color:"#0ea5e9",
    formulas:[
      { name:"Cube & Cuboid", tag:"Foundation",
        formula:"Cube:   V=a³,     SA=6a²,   Diagonal=a√3\nCuboid: V=l×b×h, SA=2(lb+bh+hl)\n  Diagonal=√(l²+b²+h²)",
        vars:[{k:"a",d:"Side of cube"},{k:"l,b,h",d:"Length, breadth, height of cuboid"}],
        examples:[{q:"Cube side = 4 cm. Find Volume & Surface Area.",steps:["V = 4³ = 64 cm³","SA = 6×4² = 6×16 = 96 cm²"],ans:"V=64 cm³, SA=96 cm²"}]},
      { name:"Cylinder", tag:"Most Asked",
        formula:"Volume = πr²h\nCurved SA (CSA) = 2πrh\nTotal SA (TSA) = 2πr(r+h)",
        vars:[{k:"r",d:"Radius of base"},{k:"h",d:"Height"}],
        examples:[{q:"r=7 cm, h=10 cm. Find Volume. (π=22/7)",steps:["V = (22/7)×7²×10","= (22/7)×490"],ans:"1540 cm³"}]},
      { name:"Cone", tag:"Important",
        formula:"Volume = ⅓πr²h\nSlant height l = √(r²+h²)\nCSA = πrl,   TSA = πr(r+l)",
        vars:[{k:"r",d:"Radius"},{k:"h",d:"Height"},{k:"l",d:"Slant height"}],
        examples:[{q:"r=3, h=4. Find l and Volume.",steps:["l=√(9+16)=√25=5","V=(1/3)×π×9×4=12π"],ans:"l=5, V=12π cm³"}]},
      { name:"Sphere & Hemisphere", tag:"Important",
        formula:"Sphere:      V=(4/3)πr³,  SA=4πr²\nHemisphere:  V=(2/3)πr³\n  CSA=2πr², TSA=3πr²",
        vars:[{k:"r",d:"Radius"}],
        examples:[{q:"Sphere r = 7 cm. Find Surface Area.",steps:["SA = 4πr²","= 4×(22/7)×49 = 4×22×7"],ans:"616 cm²"}]},
    ]
  },
  {
    id:"trig", name:"Trigonometry", icon:"📏", color:"#a855f7",
    formulas:[
      { name:"Basic Trig Ratios", tag:"Foundation",
        formula:"sin θ = P/H   (Perpendicular/Hypotenuse)\ncos θ = B/H   (Base/Hypotenuse)\ntan θ = P/B   (Perpendicular/Base)\ncosec=1/sin   sec=1/cos   cot=1/tan",
        vars:[{k:"P",d:"Perpendicular"},{k:"B",d:"Base"},{k:"H",d:"Hypotenuse"}],
        examples:[{q:"P=3, B=4, H=5. Find sin, cos, tan.",steps:["sin=3/5=0.6","cos=4/5=0.8","tan=3/4=0.75"],ans:"sin=3/5, cos=4/5, tan=3/4"}]},
      { name:"Standard Angles Table", tag:"Must Memorize",
        formula:"       0°    30°    45°    60°    90°\nsin:   0    1/2   1/√2   √3/2    1\ncos:   1   √3/2  1/√2   1/2     0\ntan:   0   1/√3   1      √3      ∞",
        vars:[],
        examples:[{q:"sin60° + cos30° = ?",steps:["sin60° = √3/2,  cos30° = √3/2","Sum = √3/2 + √3/2"],ans:"√3"}]},
      { name:"Trig Identities", tag:"Important",
        formula:"sin²θ + cos²θ = 1\n1 + tan²θ   = sec²θ\n1 + cot²θ   = cosec²θ",
        vars:[],
        examples:[{q:"sinθ = 3/5. Find cosθ.",steps:["cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25","cosθ = √(16/25)"],ans:"cosθ = 4/5"}]},
    ]
  },
  {
    id:"numbers", name:"Number System", icon:"🔢", color:"#ef4444",
    formulas:[
      { name:"Divisibility Rules", tag:"Must Know",
        formula:"÷ 2  : last digit even (0,2,4,6,8)\n÷ 3  : sum of digits divisible by 3\n÷ 4  : last 2 digits divisible by 4\n÷ 5  : ends in 0 or 5\n÷ 9  : sum of digits divisible by 9\n÷ 11 : (odd pos sum)−(even pos sum)=0 or 11",
        vars:[],
        examples:[{q:"Is 528 divisible by 4?",steps:["Last 2 digits = 28","28 ÷ 4 = 7  ✓"],ans:"Yes!"}]},
      { name:"LCM & HCF", tag:"Most Asked",
        formula:"HCF × LCM = Product of two numbers\nLCM = (a × b) ÷ HCF(a,b)",
        vars:[{k:"HCF",d:"Highest Common Factor (largest common divisor)"},{k:"LCM",d:"Least Common Multiple"}],
        examples:[{q:"Find HCF & LCM of 12 and 18.",steps:["12=2²×3,  18=2×3²","HCF = 2×3 = 6","LCM = (12×18) ÷ 6 = 216÷6"],ans:"HCF=6, LCM=36"}]},
      { name:"Squares & Cubes Recall", tag:"Shortcut",
        formula:"1²=1   2²=4   3²=9   4²=16  5²=25\n6²=36  7²=49  8²=64  9²=81  10²=100\n11²=121  12²=144  13²=169  14²=196  15²=225\n1³=1  2³=8  3³=27  4³=64  5³=125",
        vars:[],
        examples:[{q:"What is 13²?",steps:["From table → 13² = 169"],ans:"169"}]},
      { name:"Remainders & Factors", tag:"Important",
        formula:"N = Q×D + R\nN=number, D=divisor, Q=quotient, R=remainder\nIf R=0, D is a factor of N",
        vars:[{k:"N",d:"The number being divided"},{k:"D",d:"Divisor"},{k:"R",d:"Remainder"}],
        examples:[{q:"What is remainder when 47 ÷ 5?",steps:["47 = 9×5 + 2"],ans:"Remainder = 2"}]},
    ]
  },
  {
    id:"average", name:"Average", icon:"📉", color:"#22c55e",
    formulas:[
      { name:"Basic Average", tag:"Foundation",
        formula:"Average = Sum of all values ÷ Count\nSum = Average × Count",
        vars:[],
        examples:[{q:"Find average of 10, 20, 30, 40, 50.",steps:["Sum = 150","Average = 150 ÷ 5"],ans:"30"}]},
      { name:"Weighted Average", tag:"Important",
        formula:"Weighted Avg = (n1×A1 + n2×A2) ÷ (n1+n2)",
        vars:[{k:"n1,n2",d:"Number of items in each group"},{k:"A1,A2",d:"Average of each group"}],
        examples:[{q:"Class A: 30 students avg 70. Class B: 20 students avg 80. Combined avg?",steps:["= (30×70 + 20×80) ÷ (30+20)","= (2100+1600) ÷ 50 = 3700÷50"],ans:"74"}]},
      { name:"Replacement in Average", tag:"Trick",
        formula:"Change in Avg = (New value − Old value) ÷ n\nNew Avg = Old Avg ± Change",
        vars:[{k:"n",d:"Total number of values"}],
        examples:[{q:"Avg of 5 numbers = 20. One number 15 replaced by 35. New avg?",steps:["Change = (35−15) ÷ 5 = 20÷5 = 4","New Avg = 20 + 4"],ans:"24"}]},
    ]
  },
  {
    id:"simplification", name:"Simplification", icon:"🧮", color:"#fb923c",
    formulas:[
      { name:"BODMAS Rule", tag:"Foundation",
        formula:"B → Brackets  ( ) { } [ ]\nO → Of  (multiplication)\nD → Division  ÷\nM → Multiplication  ×\nA → Addition  +\nS → Subtraction  −",
        vars:[],
        examples:[{q:"Solve: 5 + 3 × (8 − 2) ÷ 2",steps:["Brackets: (8−2) = 6","Multiply: 3×6 = 18","Divide: 18÷2 = 9","Add: 5+9"],ans:"14"}]},
      { name:"Surds & Indices", tag:"Important",
        formula:"aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1\na⁻ⁿ = 1÷aⁿ\n√a × √b = √(ab)",
        vars:[{k:"a,b",d:"Base numbers"},{k:"m,n",d:"Powers/exponents"}],
        examples:[{q:"Simplify: 2³ × 2⁴",steps:["= 2^(3+4)","= 2⁷"],ans:"128"}]},
    ]
  },
];

const tagColors = {
  "Foundation":"#1e3a5f","Most Asked":"#7c2d12","Important":"#14532d",
  "Trick":"#4a1d96","Shortcut":"#1e3a5f","Must Know":"#7c2d12",
  "Must Memorize":"#4a1d96","SSC Favourite":"#7c2d12",
};
const tagText = {
  "Foundation":"#93c5fd","Most Asked":"#fca5a5","Important":"#86efac",
  "Trick":"#c4b5fd","Shortcut":"#93c5fd","Must Know":"#fca5a5",
  "Must Memorize":"#c4b5fd","SSC Favourite":"#fca5a5",
};

export default function BubuSSC() {
  const [screen, setScreen] = useState("home");
  const [chapter, setChapter] = useState(null);
  const [fIndex, setFIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filtered = DATA.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.formulas.some(f => f.name.toLowerCase().includes(search.toLowerCase()))
  );

  function openChapter(ch) { setChapter(ch); setFIndex(0); setScreen("chapter"); window.scrollTo(0,0); }
  function openFormula(i) { setFIndex(i); setScreen("formula"); window.scrollTo(0,0); }
  function goHome() { setScreen("home"); setSearch(""); }
  function goChapter() { setScreen("chapter"); window.scrollTo(0,0); }

  const f = chapter ? chapter.formulas[fIndex] : null;

  return (
    <div style={{minHeight:"100vh",background:"#050a14",fontFamily:"'Segoe UI',system-ui,sans-serif",color:"#e2e8f0",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .ch-card:hover { transform:translateY(-5px) !important; box-shadow:0 12px 40px rgba(0,0,0,.5) !important; }
        .fitem:hover { transform:translateX(6px) !important; }
        .nb:hover:not(:disabled) { background:#f97316 !important; color:#0a0e1a !important; border-color:#f97316 !important; }
        ::-webkit-scrollbar{width:6px} ::-webkit-scrollbar-track{background:#0a0e1a}
        ::-webkit-scrollbar-thumb{background:#1e3a5f;border-radius:3px}
        .tag{display:inline-block;border-radius:99px;font-size:.7rem;padding:2px 10px;font-weight:700;letter-spacing:.3px}
        input:focus { border-color: #f97316 !important; outline: none; }
      `}</style>

      {/* ═══════════════ HOME ═══════════════ */}
      {screen === "home" && (
        <div>
          <div style={{background:"linear-gradient(160deg,#0f1e35 0%,#0a0e1a 60%)",borderBottom:"3px solid #f97316",position:"relative",overflow:"hidden",paddingBottom:28}}>
            <div style={{position:"absolute",top:-60,right:-60,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(249,115,22,.18),transparent 70%)",pointerEvents:"none"}}/>
            <div style={{position:"absolute",bottom:-40,left:-40,width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(59,130,246,.12),transparent 70%)",pointerEvents:"none"}}/>
            <div style={{textAlign:"center",padding:"36px 20px 10px",position:"relative"}}>
              <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(249,115,22,.15)",border:"1px solid rgba(249,115,22,.4)",borderRadius:99,padding:"5px 16px",marginBottom:14}}>
                <span style={{fontSize:".75rem",color:"#f97316",fontWeight:700,letterSpacing:1,textTransform:"uppercase"}}>SSC CGL · CHSL · MTS · CPO</span>
              </div>
              <h1 style={{fontFamily:"'Baloo 2',sans-serif",fontSize:"clamp(2.4rem,8vw,3.4rem)",fontWeight:800,margin:0,lineHeight:1.1}}>
                <span style={{color:"#f97316"}}>Bubu</span><span style={{color:"#fff"}}>SSC</span>
              </h1>
              <p style={{color:"#94a3b8",marginTop:8,fontSize:".95rem",fontFamily:"'Nunito',sans-serif"}}>All formulas · Solved examples · One tap access</p>
              <div style={{display:"flex",justifyContent:"center",gap:20,marginTop:18,flexWrap:"wrap"}}>
                {[["📚",DATA.length,"Chapters"],["🔢",DATA.reduce((a,c)=>a+c.formulas.length,0),"Formulas"],["✅",DATA.reduce((a,c)=>a+c.formulas.reduce((b,f)=>b+f.examples.length,0),0),"Examples"]].map(([icon,count,label],i)=>(
                  <div key={i} style={{textAlign:"center"}}>
                    <div style={{fontSize:"1.5rem",fontWeight:800,color:["#f97316","#3b82f6","#10b981"][i],fontFamily:"'Baloo 2',sans-serif"}}>{count}</div>
                    <div style={{fontSize:".72rem",color:"#64748b",textTransform:"uppercase",letterSpacing:.5}}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{padding:"18px 16px 4px",maxWidth:640,margin:"0 auto"}}>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:"1.1rem",pointerEvents:"none"}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search chapters or formulas..."
                style={{width:"100%",background:"#0f1e35",border:"1.5px solid #1e3a5f",borderRadius:14,padding:"13px 16px 13px 42px",color:"#e2e8f0",fontSize:".95rem",fontFamily:"'Nunito',sans-serif",transition:"border .2s"}} />
            </div>
          </div>

          <div style={{padding:"14px 16px 6px",color:"#475569",fontSize:".75rem",textTransform:"uppercase",letterSpacing:1,maxWidth:640,margin:"0 auto"}}>
            📖 {filtered.length} Chapter{filtered.length!==1?"s":""}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(148px,1fr))",gap:12,padding:"4px 16px 20px",maxWidth:860,margin:"0 auto"}}>
            {filtered.map(ch=>(
              <div key={ch.id} className="ch-card" onClick={()=>openChapter(ch)}
                style={{background:"linear-gradient(145deg,#0f1e35,#0a1628)",border:"1.5px solid #1e3a5f",borderRadius:18,padding:"22px 14px 18px",cursor:"pointer",textAlign:"center",transition:"all .22s",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:ch.color,borderRadius:"18px 18px 0 0"}}/>
                <div style={{fontSize:"2.2rem",marginBottom:10}}>{ch.icon}</div>
                <div style={{fontWeight:800,fontSize:".88rem",marginBottom:8,lineHeight:1.3,fontFamily:"'Nunito',sans-serif",color:"#f1f5f9"}}>{ch.name}</div>
                <div style={{background:`${ch.color}22`,color:ch.color,fontSize:".72rem",padding:"3px 10px",borderRadius:99,fontWeight:700,display:"inline-block"}}>{ch.formulas.length} Formulas</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",padding:"10px 0 30px",color:"#334155",fontSize:".78rem",fontFamily:"'Nunito',sans-serif"}}>
            Made with ❤️ for SSC aspirants · <span style={{color:"#f97316",fontWeight:700}}>BubuSSC</span>
          </div>
        </div>
      )}

      {/* ═══════════════ CHAPTER VIEW ═══════════════ */}
      {screen === "chapter" && chapter && (
        <div>
          <div style={{background:"#0f1e35",borderBottom:"1px solid #1e3a5f",padding:"13px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:20}}>
            <button onClick={goHome} style={{background:"#1e3a5f",border:"none",color:"#e2e8f0",padding:"8px 14px",borderRadius:9,cursor:"pointer",fontWeight:700,fontSize:".82rem",fontFamily:"'Nunito',sans-serif"}}>← Home</button>
            <div>
              <div style={{fontFamily:"'Baloo 2',sans-serif",fontWeight:800,fontSize:"1.05rem",color:chapter.color,lineHeight:1.1}}>{chapter.icon} {chapter.name}</div>
              <div style={{fontSize:".72rem",color:"#64748b"}}>{chapter.formulas.length} formulas — tap any to open</div>
            </div>
          </div>
          <div style={{padding:"18px 16px 50px",maxWidth:700,margin:"0 auto"}}>
            <div style={{background:"linear-gradient(135deg,#0f1e35,#0a1628)",border:"1px solid #1e3a5f",borderRadius:14,padding:"14px 16px",marginBottom:16,display:"flex",gap:10,alignItems:"flex-start"}}>
              <span style={{fontSize:"1.2rem"}}>💡</span>
              <span style={{fontSize:".85rem",color:"#94a3b8",lineHeight:1.6,fontFamily:"'Nunito',sans-serif"}}>Tap any formula below to see the full formula, variables explained, and a step-by-step solved example.</span>
            </div>
            {chapter.formulas.map((fm,i)=>(
              <div key={i} className="fitem" onClick={()=>openFormula(i)}
                style={{background:"linear-gradient(135deg,#0f1e35,#0a1628)",border:"1.5px solid #1e3a5f",borderRadius:15,padding:"16px 18px",marginBottom:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,transition:"all .18s"}}>
                <div style={{display:"flex",alignItems:"center",gap:14}}>
                  <div style={{background:chapter.color,color:"#0a0e1a",fontWeight:800,width:34,height:34,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".85rem",flexShrink:0,fontFamily:"'Baloo 2',sans-serif"}}>{i+1}</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:".95rem",fontFamily:"'Nunito',sans-serif",marginBottom:4}}>{fm.name}</div>
                    <span className="tag" style={{background:tagColors[fm.tag]||"#1e3a5f",color:tagText[fm.tag]||"#93c5fd"}}>{fm.tag}</span>
                  </div>
                </div>
                <div style={{color:chapter.color,fontSize:"1.4rem",flexShrink:0}}>›</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════ FORMULA DETAIL ═══════════════ */}
      {screen === "formula" && chapter && f && (
        <div>
          <div style={{background:"#0f1e35",borderBottom:"1px solid #1e3a5f",padding:"13px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:20}}>
            <button onClick={goChapter} style={{background:"#1e3a5f",border:"none",color:"#e2e8f0",padding:"8px 14px",borderRadius:9,cursor:"pointer",fontWeight:700,fontSize:".82rem",fontFamily:"'Nunito',sans-serif"}}>← Back</button>
            <div style={{flex:1}}>
              <div style={{fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:".85rem",color:"#94a3b8",lineHeight:1.1}}>{chapter.icon} {chapter.name}</div>
              <div style={{fontSize:".72rem",color:"#475569"}}>Formula {fIndex+1} of {chapter.formulas.length}</div>
            </div>
            <div style={{display:"flex",gap:4,flexWrap:"wrap",justifyContent:"flex-end",maxWidth:100}}>
              {chapter.formulas.map((_,i)=>(
                <div key={i} onClick={()=>openFormula(i)} style={{width:8,height:8,borderRadius:"50%",background:i===fIndex?chapter.color:"#1e3a5f",cursor:"pointer",transition:"background .2s"}}/>
              ))}
            </div>
          </div>

          <div style={{padding:"16px",maxWidth:700,margin:"0 auto",paddingBottom:50}}>
            <div style={{background:"linear-gradient(145deg,#0f1e35 0%,#0a1628 100%)",border:`2px solid ${chapter.color}`,borderRadius:22,padding:"24px 20px",marginBottom:16,position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,right:0,width:120,height:120,borderRadius:"50%",background:`radial-gradient(circle,${chapter.color}22,transparent 70%)`,pointerEvents:"none"}}/>
              <div style={{marginBottom:12}}>
                <span className="tag" style={{background:tagColors[f.tag]||"#1e3a5f",color:tagText[f.tag]||"#93c5fd",marginBottom:10,display:"inline-block"}}>{f.tag}</span>
                <h2 style={{fontFamily:"'Baloo 2',sans-serif",fontWeight:800,fontSize:"1.3rem",color:chapter.color,margin:0,lineHeight:1.2}}>{f.name}</h2>
              </div>
              <div style={{background:"#020812",borderRadius:14,padding:"18px 16px",margin:"14px 0",fontFamily:"'Courier New',monospace",fontSize:".97rem",color:"#4ade80",lineHeight:2.0,border:`1px solid ${chapter.color}44`,whiteSpace:"pre-wrap",wordBreak:"break-word",letterSpacing:".3px"}}>
                {f.formula}
              </div>
              {f.vars.length > 0 && (
                <div style={{marginTop:4}}>
                  <div style={{fontSize:".72rem",textTransform:"uppercase",letterSpacing:1,color:"#3b82f6",fontWeight:700,marginBottom:10}}>📌 Variables Explained</div>
                  {f.vars.map((v,i)=>(
                    <div key={i} style={{display:"flex",gap:10,marginBottom:8,alignItems:"flex-start"}}>
                      <span style={{background:"#1e3a5f",color:"#93c5fd",fontFamily:"monospace",fontSize:".8rem",padding:"3px 9px",borderRadius:6,flexShrink:0,marginTop:1,fontWeight:700}}>{v.k}</span>
                      <span style={{fontSize:".87rem",color:"#94a3b8",lineHeight:1.5,fontFamily:"'Nunito',sans-serif"}}>{v.d}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {f.examples.map((ex,i)=>(
              <div key={i} style={{background:"#0a1628",border:"1.5px solid #1e3a5f",borderRadius:18,padding:"20px 18px",marginBottom:14}}>
                <div style={{display:"inline-block",background:"rgba(249,115,22,.15)",border:"1px solid rgba(249,115,22,.3)",borderRadius:8,padding:"4px 10px",fontSize:".75rem",color:"#f97316",fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>📝 Solved Example</div>
                <div style={{background:"#0f1e35",borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:".92rem",lineHeight:1.7,fontFamily:"'Nunito',sans-serif",color:"#e2e8f0",borderLeft:`3px solid ${chapter.color}`}}>❓ {ex.q}</div>
                <div style={{fontSize:".7rem",textTransform:"uppercase",letterSpacing:1,color:"#64748b",marginBottom:8}}>Step by Step</div>
                {ex.steps.map((s,j)=>(
                  <div key={j} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
                    <div style={{background:"#1e3a5f",color:"#93c5fd",fontSize:".72rem",fontWeight:700,width:20,height:20,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{j+1}</div>
                    <div style={{fontSize:".88rem",color:"#94a3b8",lineHeight:1.6,fontFamily:"'Nunito',sans-serif"}}>{s}</div>
                  </div>
                ))}
                <div style={{background:"#020812",borderRadius:10,padding:"12px 14px",fontFamily:"'Courier New',monospace",color:"#4ade80",fontSize:".9rem",marginTop:10,border:"1px solid #14532d",display:"flex",alignItems:"center",gap:8}}>
                  <span>✅</span><strong>{ex.ans}</strong>
                </div>
              </div>
            ))}

            <div style={{display:"flex",gap:12,marginTop:6}}>
              <button className="nb" onClick={()=>{setFIndex(fIndex-1);window.scrollTo(0,0);}} disabled={fIndex===0}
                style={{flex:1,background:"#0f1e35",border:"1.5px solid #1e3a5f",color:fIndex===0?"#334155":"#e2e8f0",padding:"13px",borderRadius:12,cursor:fIndex===0?"not-allowed":"pointer",fontWeight:700,fontSize:".88rem",fontFamily:"'Nunito',sans-serif",transition:"all .18s"}}>
                ← Previous
              </button>
              <button className="nb" onClick={()=>{setFIndex(fIndex+1);window.scrollTo(0,0);}} disabled={fIndex===chapter.formulas.length-1}
                style={{flex:1,background:"#0f1e35",border:"1.5px solid #1e3a5f",color:fIndex===chapter.formulas.length-1?"#334155":"#e2e8f0",padding:"13px",borderRadius:12,cursor:fIndex===chapter.formulas.length-1?"not-allowed":"pointer",fontWeight:700,fontSize:".88rem",fontFamily:"'Nunito',sans-serif",transition:"all .18s"}}>
                Next →
              </button>
            </div>

            <div style={{marginTop:16,background:"#0f1e35",borderRadius:12,padding:"12px 14px",border:"1px solid #1e3a5f"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontSize:".72rem",color:"#64748b",textTransform:"uppercase",letterSpacing:.5}}>Chapter Progress</span>
                <span style={{fontSize:".72rem",color:chapter.color,fontWeight:700}}>{fIndex+1}/{chapter.formulas.length}</span>
              </div>
              <div style={{background:"#1e3a5f",borderRadius:99,height:6}}>
                <div style={{background:chapter.color,borderRadius:99,height:6,width:`${((fIndex+1)/chapter.formulas.length)*100}%`,transition:"width .3s"}}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
