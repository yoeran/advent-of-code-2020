const input = `46
63
21
115
125
35
89
17
116
90
51
66
111
142
148
60
2
50
82
20
47
24
80
101
103
16
34
72
145
141
124
14
123
27
62
61
95
138
29
7
149
147
104
152
22
81
11
96
97
30
41
98
59
45
88
37
10
114
110
4
56
122
139
117
108
91
36
146
131
109
31
75
70
140
38
121
3
28
118
54
107
84
15
76
71
102
130
132
87
55
129
83
23
42
69
1
77
135
128
94`;

const adapters = input
    .split('\n')
    .map((n) => parseInt(n))
    .sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });

adapters.push(adapters.slice(-1)[0] + 3);

const data = adapters.reduce(
    (all, adapter) => {
        const diff = adapter - all.rating;

        if (diff <= 3) {
            all.distribution[`d${diff}`]++;
            all.rating = adapter;
        }

        return all;
    },
    { rating: 0, distribution: { d1: 0, d2: 0, d3: 0 } }
);

console.log('Data', data);
console.log('Answer', data.distribution.d1 * data.distribution.d3);
