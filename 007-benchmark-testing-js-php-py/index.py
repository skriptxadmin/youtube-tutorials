import json
import time


def extract_email(obj):
    if 'email' in obj:
        return obj['email']
    else:
        return ''
def remove_blanks(email):
    return email

# https://stackoverflow.com/questions/312443/how-do-i-split-a-list-into-equally-sized-chunks

def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]

start = time.time()
with open('../emails.json') as file:
    contents =json.load(file)
    emails = map(extract_email, contents)
    filtered = filter(remove_blanks, emails)
    chunked = chunks(list(filtered), 100)
    i = 0
    for item in chunked:
        i = i + 1
        with open('./trash/'+str(i)+'.py.json', 'w') as file:
            file.write(json.dumps(((item))))

end = time.time()


# multiply by 1000 to convert seconds to milliseconds
print("Time Taken = {:0.2f} ms".format((end-start)*1000))