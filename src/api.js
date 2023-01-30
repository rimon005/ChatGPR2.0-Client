export const fetchResponse = async (chat) => {
    try {
        const response = await fetch("http://localhost:3080/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                massage: chat.map((massage) => massage.massage).join(" \n ")
            })
        });
        const data = response.json();
        // console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}