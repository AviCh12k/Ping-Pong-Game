    var active, global, current, dice;
    function init()
    {
        //INITIAL STAGE
        active=0;
        global=[0,0];
        current=0;
        document.getElementById("global_score_0").textContent=0;
        document.getElementById("global_score_1").textContent=0;
        document.getElementById("curr_score_0").textContent=0;
        document.getElementById("curr_score_1").textContent=0;
        document.querySelector("#name_0").textContent="Player 1"; 
        document.querySelector("#name_1").textContent="Player 2"; 
        document.getElementById("player_panel_0").classList.remove("active");
        document.getElementById("player_panel_1").classList.remove("active");
        document.getElementById("player_panel_0").classList.remove("winner");
        document.getElementById("player_panel_1").classList.remove("winner");
        document.getElementById("player_panel_" + active).classList.add("active");
        document.getElementById("random").style.display='none';
    }

    // ON CLICK ROLL

    function roll()
    {
        if(global[0]<100 && global[1]<100)
        {
            document.getElementById("random").style.display='inline';
            dice=Math.floor((Math.random()*6)+1);
            document.getElementById("random").textContent=dice;
            if(dice!=1)
            {
                current+=dice;
                document.getElementById("curr_score_" + active).textContent=current;
            }
            else
            {
                current=0;
                document.getElementById("player_panel_" + active).classList.remove("active");
                document.getElementById("curr_score_" + active).textContent=current;
                if(active==0)
                active=1;
                else active=0;
                document.getElementById("player_panel_" + active).classList.add("active");
            }
        }
    }

    // ON CLICK HOLD

    function hold()
    {
        global[active]+=current;
        current=0;
        document.getElementById("global_score_" + active).textContent=global[active];
        document.getElementById("curr_score_" + active).textContent=current;   
        document.getElementById("player_panel_" + active).classList.remove("active");
        if(global[active]>=100)
        {
            document.getElementById("player_panel_" + active).classList.add("winner");
            document.getElementById("player_panel_" + active).classList.add("active");
            document.querySelector("#name_"+ active).textContent="WINNER";
            document.getElementById("random").style.display='none';            
        } 
        else 
        {
            if(active==0)
            active=1;
            else 
            active=0;
            dice=0;
            document.getElementById("random").textContent=dice;
            document.getElementById("player_panel_" + active).classList.add("active");
        }
    }

    //FIRST TIME
    
    init();