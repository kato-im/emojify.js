    /* jshint unused:true, browser:true, strict:true */
    /* global define:false */
    (function (global) {

        var emojify = (function () {
            // Get DOM as local variable for simplicity's sake
            var document = global.window.document;

            /**
             * NB!
             * The namedEmojiString variable is updated automatically by the
             * `update.sh` script. Do not remove the markers as this will
             * cause `update.sh` to stop working.
             */
            var namedEmojiString =
            //##EMOJILISTSTART
            "100,109,1234,-1,+1,8ball,abcd,abc,ab,accept,aerial_tramway,airplane,alarm_clock,alien,ambulance,anchor,angel,anger,angry,anguished,ant,a,apple,aquarius,aries,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right_hook,arrow_right,arrows_clockwise,arrows_counterclockwise,arrow_up_down,arrow_upper_left,arrow_upper_right,arrow_up,arrow_up_small,articulated_lorry,art,astonished,atm,baby_bottle,baby_chick,baby,baby_symbol,baggage_claim,balloon,ballot_box_with_check,bamboo,banana,bangbang,bank,barber,bar_chart,baseball,basketball,bath,bathtub,battery,bear,bee,beer,beers,beetle,beginner,bell,bento,bicyclist,bike,bikini,bird,birthday,black_circle,black_joker,black_nib,black_square_button,black_square,blossom,blowfish,blue_book,blue_car,blue_heart,blush,boar,boat,bomb,bookmark,bookmark_tabs,book,books,boom,boot,bouquet,bowling,bow,bowtie,boy,b,bread,bride_with_veil,bridge_at_night,briefcase,broken_heart,bug,bulb,bullettrain_front,bullettrain_side,bus,busstop,bust_in_silhouette,busts_in_silhouette,cactus,cake,calendar,calling,camel,camera,cancer,candy,capital_abcd,capricorn,card_index,carousel_horse,car,cat2,cat,cd,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cherries,cherry_blossom,chestnut,chicken,children_crossing,chocolate_bar,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,clapper,clap,clipboard,clock1030,clock10,clock1130,clock11,clock1230,clock12,clock130,clock1,clock230,clock2,clock330,clock3,clock430,clock4,clock530,clock5,clock630,clock6,clock730,clock7,clock830,clock8,clock930,clock9,closed_book,closed_lock_with_key,closed_umbrella,cloud,cl,clubs,cn,cocktail,coffee,cold_sweat,collision,computer,confetti_ball,confounded,confused,congratulations,construction,construction_worker,convenience_store,cookie,cool,cop,copyright,corn,couplekiss,couple,couple_with_heart,cow2,cow,credit_card,crocodile,crossed_flags,crown,crying_cat_face,cry,crystal_ball,cupid,curly_loop,currency_exchange,curry,custard,customs,cyclone,dancer,dancers,dango,dart,dash,date,deciduous_tree,department_store,de,diamond_shape_with_a_dot_inside,diamonds,disappointed,disappointed_relieved,dizzy_face,dizzy,dog2,dog,dollar,dolls,dolphin,do_not_litter,donut,door,doughnut,dragon_face,dragon,dress,dromedary_camel,droplet,dvd,ear_of_rice,ear,earth_africa,earth_americas,earth_asia,eggplant,egg,eight,eight_pointed_black_star,eight_spoked_asterisk,electric_plug,elephant,e-mail,email,end,envelope,es,european_castle,european_post_office,euro,evergreen_tree,exclamation,expressionless,eyeglasses,eyes,facepunch,factory,fallen_leaf,family,fast_forward,fax,fearful,feelsgood,feet,ferris_wheel,file_folder,finnadie,fire_engine,fire,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish_cake,fishing_pole_and_fish,fish,fist,five,flags,flashlight,floppy_disk,flower_playing_cards,flushed,foggy,football,fork_and_knife,fountain,four_leaf_clover,four,free,fried_shrimp,fries,frog,frowning,fr,fuelpump,full_moon,full_moon_with_face,fu,game_die,gb,gemini,gem,ghost,gift_heart,gift,girl,globe_with_meridians,goat,goberserk,godmode,golf,grapes,green_apple,green_book,green_heart,grey_exclamation,grey_question,grimacing,grinning,grin,guardsman,guitar,gun,haircut,hamburger,hammer,hamster,handbag,hand,hankey,hash,hatched_chick,hatching_chick,headphones,hear_no_evil,heartbeat,heart_decoration,heart_eyes_cat,heart_eyes,heart,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,helicopter,herb,hibiscus,high_brightness,high_heel,hocho,honeybee,honey_pot,horse,horse_racing,hospital,hotel,hotsprings,hourglass_flowing_sand,hourglass,house,house_with_garden,hurtrealbad,hushed,ice_cream,icecream,ideograph_advantage,id,imp,inbox_tray,incoming_envelope,information_desk_person,information_source,innocent,interrobang,iphone,it,izakaya_lantern,jack_o_lantern,japanese_castle,japanese_goblin,japanese_ogre,japan,jeans,joy_cat,joy,jp,keycap_ten,key,kimono,kissing_cat,kissing_closed_eyes,kissing_face,kissing_heart,kissing,kissing_smiling_eyes,kiss,koala,koko,kr,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,laughing,leaves,ledger,left_luggage,left_right_arrow,leftwards_arrow_with_hook,lemon,leopard,leo,libra,light_rail,link,lips,lipstick,lock,lock_with_ink_pen,lollipop,loop,loudspeaker,love_hotel,love_letter,low_brightness,mag,mag_right,mahjong,mailbox_closed,mailbox,mailbox_with_mail,mailbox_with_no_mail,man,mans_shoe,man_with_gua_pi_mao,man_with_turban,maple_leaf,mask,massage,meat_on_bone,mega,melon,memo,mens,metal,metro,microphone,microscope,milky_way,minibus,minidisc,mobile_phone_off,moneybag,money_with_wings,monkey_face,monkey,monorail,moon,mortar_board,mountain_bicyclist,mountain_cableway,mountain_railway,mount_fuji,mouse2,mouse,movie_camera,moyai,m,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,nail_care,name_badge,neckbeard,necktie,negative_squared_cross_mark,neutral_face,new_moon,new_moon_with_face,new,newspaper,ng,nine,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_mobile_phones,no_mouth,non-potable_water,no_pedestrians,nose,no_smoking,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o2,ocean,octocat,octopus,oden,office,ok_hand,ok,ok_woman,older_man,older_woman,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,on,open_file_folder,open_hands,open_mouth,ophiuchus,o,orange_book,outbox_tray,ox,page_facing_up,pager,page_with_curl,palm_tree,panda_face,paperclip,parking,part_alternation_mark,partly_sunny,passport_control,paw_prints,peach,pear,pencil2,pencil,penguin,pensive,performing_arts,persevere,person_frowning,person_with_blond_hair,person_with_pouting_face,phone,pig2,pig_nose,pig,pill,pineapple,pisces,pizza,plus1,point_down,point_left,point_right,point_up_2,point_up,police_car,poodle,poop,postal_horn,postbox,post_office,potable_water,pouch,poultry_leg,pound,pouting_cat,pray,princess,punch,purple_heart,purse,pushpin,put_litter_in_its_place,question,rabbit2,rabbit,racehorse,radio_button,radio,rage1,rage2,rage3,rage4,rage,railway_car,rainbow,raised_hand,raised_hands,raising_hand,ramen,ram,rat,recycle,red_car,red_circle,registered,relaxed,relieved,repeat_one,repeat,restroom,revolving_hearts,rewind,ribbon,rice_ball,rice_cracker,rice,rice_scene,ring,rocket,roller_coaster,rooster,rose,rotating_light,round_pushpin,rowboat,rugby_football,runner,running,running_shirt_with_sash,ru,sagittarius,sailboat,sake,sandal,santa,sa,satellite,satisfied,saxophone,school,school_satchel,scissors,scorpius,scream_cat,scream,scroll,seat,secret,seedling,see_no_evil,seven,shaved_ice,sheep,shell,shipit,ship,shirt,shit,shoe,shower,signal_strength,six,six_pointed_star,ski,skull,sleeping,sleepy,slot_machine,small_blue_diamond,small_orange_diamond,small_red_triangle_down,small_red_triangle,smile_cat,smile,smiley_cat,smiley,smiling_imp,smirk_cat,smirk,smoking,snail,snake,snowboarder,snowflake,snowman,sob,soccer,soon,sos,sound,space_invader,spades,spaghetti,sparkler,sparkles,sparkling_heart,speaker,speak_no_evil,speech_balloon,speedboat,squirrel,star2,star,stars,station,statue_of_liberty,steam_locomotive,stew,straight_ruler,strawberry,stuck_out_tongue_closed_eyes,stuck_out_tongue,stuck_out_tongue_winking_eye,sunflower,sunglasses,sunny,sunrise_over_mountains,sunrise,sun_with_face,surfer,sushi,suspect,suspension_railway,sweat_drops,sweat,sweat_smile,sweet_potato,swimmer,symbols,syringe,tada,tanabata_tree,tangerine,taurus,taxi,tea,telephone,telephone_receiver,telescope,tennis,tent,thought_balloon,three,thumbsdown,thumbsup,ticket,tiger2,tiger,tired_face,tm,toilet,tokyo_tower,tomato,tongue,tophat,top,tractor,traffic_light,train2,train,tram,triangular_flag_on_post,triangular_ruler,trident,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,turtle,tv,twisted_rightwards_arrows,two_hearts,two_men_holding_hands,two,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uk,umbrella,unamused,underage,unlock,up,us,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,violin,virgo,volcano,v,vs,walking,waning_crescent_moon,waning_gibbous_moon,warning,watch,water_buffalo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,whale2,whale,wheelchair,white_check_mark,white_circle,white_flower,white_square_button,white_square,wind_chime,wine_glass,wink2,wink,wolf,woman,womans_clothes,womans_hat,womens,worried,wrench,x,yellow_heart,yen,yum,zap,zero,zzz";
            //##EMOJILISTEND


            var namedEmoji = namedEmojiString.split(/,/);

            /* A hash with the named emoji as keys */
            var namedMatchHash = namedEmoji.reduce(function(memo, v) {
                memo[v] = true;
                return memo;
            }, {});

            /* List of emoticons used in the regular expression */
            var emoticons = {
     /* :..: */ named: /:([a-z0-9A-Z_-]+):/,
     /* :-)  */ blush: /:-?\)/g,
     /* :-o  */ scream: /:-o/gi,
     /* :-]  */ smirk: /[:;]-?]/g,
     /* :-D  */ smiley: /[:;]-?d/gi,
     /* X-D  */ stuck_out_tongue_closed_eyes: /x-d/gi,
     /* ;-p  */ stuck_out_tongue_winking_eye: /[:;]-?p/gi,
     /* :-[  */ rage: /:-?[\[@]/g,
     /* :-(  */ disappointed: /:-?\(/g,
     /* :'-( */ sob: /:['’]-?\(|:&#x27;\(/g,
     /* :-*  */ kissing_heart: /:-?\*/g,
     /* ;-)  */ wink: /;-?\)/g,
     /* :-/  */ pensive: /:-?\//g,
     /* :-s  */ confounded: /:-?s/gi,
     /* :-|  */ flushed: /:-?\|/g,
     /* :-$  */ relaxed: /:-?\$/g,
     /* :-x  */ mask: /:-x/gi,
     /* <3   */ heart: /<3|&lt;3/g,
     /* </3  */ broken_heart: /<\/3|&lt;&#x2F;3/g,
     /* :+1: */ thumbsup: /:\+1:/g,
     /* :-1: */ thumbsdown: /:\-1:/g
            };


            var emoticonsProcessed = Object.keys(emoticons).map(function(key) {
                return [emoticons[key], key];
            });

            /* The source for our mega-regex */
            var mega = emoticonsProcessed
                    .map(function(v) {
                        var re = v[0];
                        var val = re.source || re;
                        val = val.replace(/(^|[^\[])\^/g, '$1');
                        return "(" + val + ")";
                    })
                    .join('|');

            /* The regex used to find emoji */
            var emojiMegaRe = new RegExp(mega, "gi");

            var defaultConfig = {
                emojify_tag_type: 'div',
                only_crawl_id: null,
                img_dir: 'images/emoji',
                ignored_tags: {
                    'SCRIPT': 1,
                    'TEXTAREA': 1,
                    'A': 1,
                    'PRE': 1,
                    'CODE': 1
                },
                emoticons_enabled: true
            };

            /* Returns true if the given char is whitespace */
            function isWhitespace(s) {
                return s === ' ' || s === '\t' || s === '\r' || s === '\n' || s === '';
            }

            /* Given a match in a node, replace the text with an image */
            function insertEmojicon(node, match, emojiName) {
                var emojiImg = document.createElement('img');
                emojiImg.setAttribute('title', ':' + emojiName + ':');
                emojiImg.setAttribute('class', 'emoji');
                emojiImg.setAttribute('src', defaultConfig.img_dir + '/' + emojiName + '.png');
                emojiImg.setAttribute('align', 'absmiddle');
                node.splitText(match.index);
                node.nextSibling.nodeValue = node.nextSibling.nodeValue.substr(match[0].length, node.nextSibling.nodeValue.length);
                emojiImg.appendChild(node.splitText(match.index));
                node.parentNode.insertBefore(emojiImg, node.nextSibling);
            }

            /* Given an regex match, return the name of the matching emoji */
            function getEmojiNameForMatch(match) {
                /* Special case for named emoji */
                if(match[1] && match[2]) {
                    var named = match[2];
                    if(namedMatchHash[named]) { return named; }
                    return;
                }
                if (defaultConfig.emoticons_enabled) {
                    for(var i = 3; i < match.length - 1; i++) {
                        if(match[i]) {
                            return emoticonsProcessed[i - 2][1];
                        }
                    }
                }
            }

            function defaultReplacer(emoji, name) {
                return "<img title=':" + name + ":' class='emoji' src='" + defaultConfig.img_dir + '/' + name + ".png' align='absmiddle' />";
            }

            function Validator() {
                this.lastEmojiTerminatedAt = -1;
            }

            Validator.prototype = {
                validate: function(match, index, input) {
                    var self = this;

                    /* Validator */
                    var emojiName = getEmojiNameForMatch(match);
                    if(!emojiName) { return; }

                    var m = match[0];
                    var length = m.length;
                    // var index = match.index;
                    // var input = match.input;

                    function success() {
                        self.lastEmojiTerminatedAt = length + index;
                        return emojiName;
                    }

                    /* Any smiley thats 3 chars long is probably a smiley */
                    if(m.length > 2) { return success(); }

                    /* At the beginning? */
                    if(index === 0) { return success(); }

                    /* At the end? */
                    if(input.length === m.length + index) { return success(); }

                    /* Has a whitespace before? */
                    if(isWhitespace(input.charAt(index - 1))) { return success(); }

                    /* Has a whitespace after? */
                    if(isWhitespace(input.charAt(m.length + index))) { return success(); }

                    /* Has an emoji before? */
                    if(this.lastEmojiTerminatedAt === index) { return success(); }

                    return;
                }
            };

            function emojifyString (htmlString, replacer) {
                if(!htmlString) { return htmlString; }
                if(!replacer) { replacer = defaultReplacer; }

                var validator = new Validator();

                return htmlString.replace(emojiMegaRe, function() {
                    var matches = Array.prototype.slice.call(arguments, 0, -2);
                    var index = arguments[arguments.length - 2];
                    var input = arguments[arguments.length - 1];
                    var emojiName = validator.validate(matches, index, input);
                    if(emojiName) {
                        return replacer(arguments[0], emojiName);
                    }

                    /* Did not validate, return the original value */
                    return arguments[0];
                });

            }

            function run(el) {
                // Check if an element was not passed.
                if(typeof el === 'undefined'){
                    // Check if an element was configured. If not, default to the body.
                    if (defaultConfig.only_crawl_id) {
                        el = document.getElementById(defaultConfig.only_crawl_id);
                    } else {
                        el = document.body;
                    }
                }

                var ignoredTags = defaultConfig.ignored_tags;

                var nodeIterator = document.createTreeWalker(
                    el,
                    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
                    function(node) {
                        if(node.nodeType !== 1) {
                            /* Text Node? Good! */
                            return NodeFilter.FILTER_ACCEPT;
                        }

                        if(ignoredTags[node.tagName] || node.classList.contains('no-emojify')) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        return NodeFilter.FILTER_SKIP;
                    },
                    false);

                var nodeList = [];
                var node;
                while((node = nodeIterator.nextNode()) !== null) {
                    nodeList.push(node);
                }

                nodeList.forEach(function(node) {
                    var match;
                    var matches = [];
                    var validator = new Validator();

                    while ((match = emojiMegaRe.exec(node.data)) !== null) {
                        if(validator.validate(match, match.index, match.input)) {
                            matches.push(match);
                        }
                    }

                    for (var i = matches.length; i-- > 0;) {
                        /* Replace the text with the emoji */
                        var emojiName = getEmojiNameForMatch(matches[i]);
                        insertEmojicon(node, matches[i], emojiName);
                    }
                });
            }

            return {
                // Sane defaults
                defaultConfig: defaultConfig,
                emojiNames: namedEmoji,
                setConfig: function (newConfig) {
                    Object.keys(defaultConfig).forEach(function(f) {
                        if(f in newConfig) {
                            defaultConfig[f] = newConfig[f];
                        }
                    });
                },

                replace: emojifyString,

                // Main method
                run: run
            };
        })();

        global.emojify = emojify;


        if (typeof define === 'function' && define.amd) {
          define([], function() {
            return emojify;
          });
        }

        return emojify;


    })(this);
