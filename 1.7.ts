const friends1 = ['x', 'y', 'z'];
const friends2 = ['d', 'c', 'b'];

friends1.push(...friends2);


const mentors1 = {
    typescript: "Mezba",
    redux: "mir",
    dbms: "mizan",

}

const mentors2 = {
    prisma: "Firoz",
    next: "tonmoy",
    cloud: "nahid",
}


const allMentors = {
    ...mentors1, ...mentors2
}


const  greeting = (...friends:string[]) => {
    friends.forEach(element => {
        console.log(`Hi ${element}`);
    });
}


greeting('a', 'b', 'c', 'd', 'e');