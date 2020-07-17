

    var card = [
        {
        from:"Киев Автовокзал",
        from_adress:"пр-т Науки, 2",
        // from_station:"КИЇВ АВ",
        to:"Одесса Автовокзал",
        to_adresse:"ул. Колонтаевская, 58",
        // to_station:"Б.ДНІСТРОВСЬК",
        date:"13 июл, пн",
        departure:"12:30",
        arrive:"17:30",
        cost:500,
        stations: "КИЇВ АВ - Б.ДНІСТРОВСЬК"
        },
        {
            from:"Киев Автовокзал",
            from_adress:"пр-т Науки, 2",
            // from_station:"КИЇВ АВ",
            to:"Одесса Автовокзал",
            to_adresse:"ул. Колонтаевская, 58",
            // to_station:"Б.ДНІСТРОВСЬК",
            date:"13 июл, пн",
            departure:"15:00",
            arrive:"20:30",
            cost:450,
            stations: "КИЇВ АВ - Б.ДНІСТРОВСЬК"
        },
        {
            from:"Киев ЖД вокзал",
            from_adress:"пр-т Науки, 2",
            // from_station:"КИЇВ АВ",
            to:"Одесса Автовокзал",
            to_adresse:"ул. Колонтаевская, 58",
            // to_station:"Б.ДНІСТРОВСЬК",
            date:"13 июл, пн",
            departure:"12:30",
            arrive:"17:30",
            cost:600,
            stations: "КИЇВ АВ - Б.ДНІСТРОВСЬК"
        }

    ]

  
document.querySelector('.search').addEventListener('click', function(e){
   for(i=0; i<=card.length-1;i++){
    
        temp = document.querySelector('#card');
        t = temp.content.cloneNode(true);
        event.preventDefault();
        console.log('click')
        let fr = t.querySelector('.cities>div>.fr')
        console.log(fr)
        fr.innerHTML = card[i].from
        
        let to = t.querySelector('.cities>div>.to')
        to.innerHTML = card[i].to
        
        let fradress = t.querySelector('.cities>div>.sm_fr')
        fradress.innerHTML = card[i].from_adress
        
        let toadress =t.querySelector('.cities>div>.sm_to')
        toadress.innerHTML = card[i].to_adress
        
        let date = t.querySelector('.time>div>small')
        date.innerHTML = card[i].date
        
        let departure =t.querySelector('.time>.from>p')
        departure.innerHTML = card[i].departure
        
        let arrival = t.querySelector('.time>.to>p')
        arrival.innerHTML = card[i].arrive
        
        let cost =t.querySelector('.price>p')
        cost.innerHTML = card[i].cost
        
        let stations = t.querySelector('.station>.st')
        stations.innerHTML = card[i].stations
        document.querySelector('.content').appendChild(t)
    }
    })
   
