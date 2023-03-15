
export type NationalityCode = 'us'|'de'|'br';

export type Nationality = {code: NationalityCode, name: string, flag: string};

const UserService = () => {

    const nationalities: Nationality[] = [
        {code: 'us', name: 'United States', flag: 'https://www.countryflagicons.com/FLAT/64/US.png'},
        {code: 'de', name: 'Germany', flag: 'https://www.countryflagicons.com/FLAT/64/DE.png'},
        {code: 'br', name: 'Brazil', flag: 'https://www.countryflagicons.com/FLAT/64/BR.png'}
    ];

    const requestNationalities = () => nationalities;

    const requestNationalityByCode = (code: NationalityCode) => nationalities.find((nationality) => nationality.code === code)

    const requestUsersByNationality = async (nationalityCode: NationalityCode) => {
        const response = await fetch(`https://randomuser.me/api/?nat=${nationalityCode}&noinfo&results=5`)
        return (await response.json()).results;
    };

    return {
        requestNationalities,
        requestNationalityByCode,
        requestUsersByNationality
    }
}

const instance = UserService()

export default instance;